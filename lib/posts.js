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
  // getStaticPaths accepts array of objects where String(id)
  return posts.map((post) => {
    return {
      params: {
        id: post.tid.toString(),
      },
    };
  });
}

export async function getAllPostData() {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.POSTS_COLLECTION_NAME;

  const posts = await db
    .collection(collectionName)
    .find({ tid: { $exists: true } })
    .toArray();

  // Return posts and their data
  return posts.map((post) => {
    return {
      text: post.text,
      tag: post.tag,
      public: post.public,
      tid: post.tid,
      date: post.date,
      type: post.type,
      likes: post.tag,
      uid: post.uid,
      image: post.image,
      username: post.username,
    };
  });
}

export async function getProfilePosts(uid) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.POSTS_COLLECTION_NAME;

  const posts = await db
    .collection(collectionName)
    .find({ uid: { $eq: uid } })
    .toArray();

  const today = new Date().toISOString().split("T")[0];

  const todayPosts = posts.filter((post) => post.date.startsWith(today));
  const previousPosts = posts.filter((post) => !post.date.startsWith(today));

  console.log("today", todayPosts);
  console.log("prev", previousPosts);
  // Return posts and their data
  return {
    todayPosts,
    previousPosts,
  };
}

export async function getAllPostsByUser(uid) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.POSTS_COLLECTION_NAME;

  const posts = await db
    .collection(collectionName)
    .find({ uid: { $eq: uid } })
    .toArray();

  // Return posts and their data
  return posts.map((post) => {
    return {
      text: post.text,
      tag: post.tag,
      public: post.public,
      tid: post.tid,
      date: post.date,
      type: post.type,
      likes: post.tag,
      uid: post.uid,
      image: post.image,
      username: post.username,
    };
  });
}