import clientPromise from "@/lib/mongodb";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function setupUsername(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ success: false, message: "You must be logged in." });
    return;
  }

  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.USERS_COLLECTION_NAME;

  const { username } = req.body;

  // Check if user exists
  const userAlreadyExists = await db
    .collection(collectionName)
    .findOne({ username: username });

  if (userAlreadyExists) {
    res.status(422).json({
      success: false,
      message: "Username already exists!",
      userAlreadyExists: true,
    });
    return;
  }
  await db.collection(collectionName).updateOne(
    {
      uid: session.user.uid,
    },
    {
      $set: {
        username,
      },
    }
  );
  res
    .status(200)
    .json({ success: true, message: "Username updated successfuly" });
}