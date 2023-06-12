import clientPromise from "@/lib/mongodb";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function getMessages(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ success: false, message: "You must be logged in." });
    return;
  }
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = "messages";

  try {
    const messages = await db.collection(collectionName).find({}).toArray();
    res.status(200).json(messages);
  } catch (error) {
    console.error("Failed to get all messages:", error);
    res.status(500).json({ message: "Failed to get all messages" });
  }
}
