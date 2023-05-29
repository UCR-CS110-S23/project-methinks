import clientPromise from "@/lib/mongodb";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function signup(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.USERS_COLLECTION_NAME;

  const newUserName = req.body;

  // Check if user exists
  const userAlreadyExists = await db
    .collection(collectionName)
    .findOne({ email: newUserName.username });

  if (userAlreadyExists) {
    res.status(422).json({
      success: false,
      message: "An account with this username already exists!",
      userAlreadyExists: true,
    });
    return;
  }

  await db.collection(collectionName).insertOne(newUserName);

  res
    .status(201)
    .json({ success: true, message: "User signed up successfuly" });
}
