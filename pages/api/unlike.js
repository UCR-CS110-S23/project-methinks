import clientPromise from "@/lib/mongodb";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function decrementLikes(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ success: false, message: "You must be logged in." });
    return;
  }

  const { postId } = req.body;
  console.log(postId);

  try {
    const db = (await clientPromise).db(process.env.MONGODB_DB);
    const collectionName = process.env.POSTS_COLLECTION_NAME;

    const updatedPost = await db
      .collection(collectionName)
      .findOneAndUpdate(
        { tid: postId },
        { $inc: { likes: -1 } },
        { returnOriginal: false }
      );
    console.log("back likes", updatedPost.value.likes);
    res.status(200).json(updatedPost.value.likes);
  } catch (error) {
    console.error("Failed to increment likes:", error);
    res.status(500).json({ message: "Failed to increment likes" });
  }
}
