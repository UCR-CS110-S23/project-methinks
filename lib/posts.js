import clientPromise from "@/lib/mongodb";

export async function getPostData(tid) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.POSTS_COLLECTION_NAME;

  const post = await db
    .collection(collectionName)
    .find({ tid: { $eq: tid } })
    .toArray();

  return JSON.stringify(post);
}

export async function getAllPostIds() {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.POSTS_COLLECTION_NAME;

  const posts = await db
    .collection(collectionName)
    .find({ tid: { $exists: true } })
    .toArray();
  console.log("tid", posts);
  // getStaticPaths accepts array of objects where String(id)
  return posts.map((post) => {
    return {
      params: {
        id: post.tid.toString(),
      },
    };
  });
}
