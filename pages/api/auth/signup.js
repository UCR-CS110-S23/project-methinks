import clientPromise from "@/lib/mongodb";
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

  await db.collection(collectionName).insertOne(newUser);

  res
    .status(201)
    .json({ success: true, message: "User signed up successfuly" });
}
