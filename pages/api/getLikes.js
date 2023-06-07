import clientPromise from "@/lib/mongodb";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function getLikes(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ success: false, message: "You must be logged in." });
    return;
  }
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.POSTS_COLLECTION_NAME;
  const postID = req.query.tid;
  try {
    const post = await db
      .collection(collectionName)
      .findOne({ tid: { $eq: postID } });
    res.status(200).json(post.likes);
  } catch (error) {
    console.error("Failed to get like:", error);
    res.status(500).json({ message: "Failed to get like" });
  }
}
