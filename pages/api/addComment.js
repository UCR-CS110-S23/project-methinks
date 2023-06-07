import clientPromise from "@/lib/mongodb";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { v4 as uuidv4 } from "uuid";

export default async function addPost(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ success: false, message: "You must be logged in." });
    return;
  }

  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.POSTS_COLLECTION_NAME;

  const { tid, text } = req.body;

  try {
    await db.collection(collectionName).updateOne(
      { tid },
      {
        $push: {
          comments: {
            text,
            cid: uuidv4(),
            date: new Date().toISOString(),
            uid: session?.user?.uid,
            image: session?.user?.image,
            username: session?.user?.username,
          },
        },
      }
    );
    res
      .status(200)
      .json({ success: true, message: "Comment added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to add comment." });
  }
}
