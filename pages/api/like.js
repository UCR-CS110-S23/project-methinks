import clientPromise from "@/lib/mongodb";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { v4 as uuidv4 } from "uuid";

export default async function decrementLikes(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ success: false, message: "You must be logged in." });
    return;
  }
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const like = req.body;

  try {
    // delete from likes collection
    const likesCollectionName = process.env.LIKES_COLLECTION_NAME;
    await db.collection(likesCollectionName).insertOne({
      lid: uuidv4(),
      ...like,
    });
  } catch (error) {
    console.error("Failed to insert like:", error);
    res.status(500).json({ message: "Failed to insert like" });
  }

  try {
    const postsCollectionName = process.env.POSTS_COLLECTION_NAME;
    const updatedPost = await db
      .collection(postsCollectionName)
      .findOneAndUpdate(
        { tid: like.tid },
        { $inc: { likes: +1 } },
        { returnOriginal: false }
      );

    res.status(200).json(updatedPost.value.likes);
  } catch (error) {
    console.error("Failed to increment likes:", error);
    res.status(500).json({ message: "Failed to increment likes" });
  }
}
