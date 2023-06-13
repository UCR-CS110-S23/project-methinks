import clientPromise from "@/lib/mongodb";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function decrementtLikes(req, res) {
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
    await db.collection(likesCollectionName).deleteOne({
      uid: like.uid,
      tid: like.tid,
    });
  } catch (error) {
    console.error("Failed to delete like:", error);
    res.status(500).json({ message: "Failed to delete like" });
  }

  try {
    // update comments collection
    const postsCollectionName = process.env.POSTS_COLLECTION_NAME;
    const updatedPost = await db
      .collection(postsCollectionName)
      .findOneAndUpdate(
        { tid: like.tid },
        { $inc: { likes: -1 } },
        { returnOriginal: false }
      );

    res.status(200).json(updatedPost.value.likes);
  } catch (error) {
    console.error("Failed to decrement likes:", error);
    res.status(500).json({ message: "Failed to decrement likes" });
  }
}
