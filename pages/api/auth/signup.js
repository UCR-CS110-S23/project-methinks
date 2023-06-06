import clientPromise from "@/lib/mongodb";
import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "@/lib/password";

export default async function signup(req, res) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.USERS_COLLECTION_NAME;

  const newUser = req.body;

  // Check if user exists
  const userAlreadyExists = await db.collection(collectionName).findOne({
    $or: [{ email: newUser.email }, { username: newUser.username }],
  });

  if (userAlreadyExists) {
    res.status(422).json({
      success: false,
      message: "An account with this email or username already exists!",
      userAlreadyExists: true,
    });
    return;
  }

  // Hash Password
  newUser.password = await hashPassword(newUser.password);

  await db.collection(collectionName).insertOne({
    ...newUser,
    image: "/henry2.jpg",
    uid: uuidv4(),
    provider: "credentials",
    admin: false,
    bio: "",
  });

  res
    .status(200)
    .json({ success: true, message: "User signed up successfuly" });
}
