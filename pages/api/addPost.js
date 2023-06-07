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

  const newPost = req.body;

  await db.collection(collectionName).insertOne({
    ...newPost,
    tid: uuidv4(),
    date: new Date().toISOString(),
    type: "thought",
    likes: 0,
    uid: session?.user?.uid,
    image: session?.user?.image,
    username: session?.user?.username,
    comments: [],
  });

  res.status(200).json({ success: true, message: "Post added successfully" });
}
