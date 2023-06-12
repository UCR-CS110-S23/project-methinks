import clientPromise from "@/lib/mongodb";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function addMessage(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ success: false, message: "You must be logged in." });
    return;
  }
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  //   const collectionName = process.env.POSTS_COLLECTION_NAME;
  const collectionName = "messages";

  const newMessage = req.body;

  try {
    await db.collection(collectionName).insertOne(newMessage);
    res
      .status(200)
      .json({ success: true, message: "Message added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: true, message: "Message added successfully" });
  }
}
