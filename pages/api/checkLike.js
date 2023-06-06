import clientPromise from "@/lib/mongodb";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function incrementtLikes(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ success: false, message: "You must be logged in." });
    return;
  }

  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.LIKES_COLLECTION_NAME;
  const like = req.body;
  console.log("req", req.body);

  // Check if user has already liked this post
  const userAlreadyLiked = await db.collection(collectionName).findOne({
    uid: like.uid,
    tid: like.tid,
  });

  if (userAlreadyLiked) {
    res.status(200).json({
      success: false,
      message: "User has already liked this post!",
      userAlreadyLiked: true,
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: "User liked successfuly",
    userAlreadyLiked: false,
  });
}
