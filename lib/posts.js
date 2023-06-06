import clientPromise from "@/lib/mongodb";

export async function getPostData(tid) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.POSTS_COLLECTION_NAME;

  const post = await db
    .collection(collectionName)
    .find({ tid: { $eq: tid } })
    .toArray();

  const postDate = new Date(post[0].date);
  const today = new Date();

  if (postDate.toDateString() === today.toDateString()) {
    // Format the date as time only if it's today
    post[0].date = postDate.toLocaleTimeString([], {
      timeStyle: "medium",
    });
  } else {
    // Format the date as "MM-DD-YYYY" if it's not today
    const formattedDate = postDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    post[0].date = formattedDate.replace(/\//g, "-"); // Replacing slashes with dashes
  }

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

  const today = new Date();
  const startOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  ).toISOString();
  const endOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  ).toISOString();

  const posts = await db
    .collection(collectionName)
    .find({
      tid: { $exists: true },
      public: true,
      date: {
        $gte: startOfDay,
        $lt: endOfDay,
      },
    })
    .toArray();

  posts.map((post) => {
    return (post.date = new Date(post.date).toLocaleTimeString([], {
      timeStyle: "medium",
    }));
  });

  return posts.map((post) => {
    return {
      text: post.text,
      tag: post.tag,
      public: post.public,
      tid: post.tid,
      date: post.date,
      type: post.type,
      likes: post.likes,
      uid: post.uid,
      image: post.image,
      username: post.username,
    };
  });
}

export async function getProfilePosts(uid) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.POSTS_COLLECTION_NAME;

  const todayDate = new Date();
  const oneWeekAgo = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate() - 7
  ).toISOString();

  const posts = await db
    .collection(collectionName)
    .find({ uid: { $eq: uid }, date: { $gte: oneWeekAgo } })
    .toArray();

  const today = new Date().setHours(0, 0, 0, 0);

  const todayPosts = posts.filter((post) => {
    const postDate = new Date(post.date);
    return postDate >= today;
  });

  const previousPosts = posts.filter((post) => {
    const postDate = new Date(post.date);
    return postDate < today;
  });

  return {
    todayPosts,
    previousPosts,
  };
}

export async function getAnotherUsersProfilePosts(uid) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.POSTS_COLLECTION_NAME;

  const todayDate = new Date();
  const oneWeekAgo = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate() - 7
  ).toISOString();

  const posts = await db
    .collection(collectionName)
    .find({ uid: { $eq: uid }, public: true, date: { $gte: oneWeekAgo } })
    .toArray();

  const today = new Date().setHours(0, 0, 0, 0);

  const todayPosts = posts.filter((post) => {
    const postDate = new Date(post.date);
    return postDate >= today;
  });

  const previousPosts = posts.filter((post) => {
    const postDate = new Date(post.date);
    return postDate < today;
  });

  return {
    todayPosts,
    previousPosts,
  };
}
// export async function getAllPostData() {
//   const db = (await clientPromise).db(process.env.MONGODB_DB);
//   const collectionName = process.env.POSTS_COLLECTION_NAME;

//   const posts = await db
//     .collection(collectionName)
//     .find({ tid: { $exists: true } })
//     .toArray();

//   posts.map((post) => {
//     return (post.date = new Date(post.date).toLocaleTimeString([], {
//       timeStyle: "medium",
//     }));
//   });

//   // Return posts and their data
//   return posts.map((post) => {
//     return {
//       text: post.text,
//       tag: post.tag,
//       public: post.public,
//       tid: post.tid,
//       date: post.date,
//       type: post.type,
//       likes: post.tag,
//       uid: post.uid,
//       image: post.image,
//       username: post.username,
//     };
//   });
// }

// export async function getAllPostsByUser(uid) {
//   const db = (await clientPromise).db(process.env.MONGODB_DB);
//   const collectionName = process.env.POSTS_COLLECTION_NAME;

//   const posts = await db
//     .collection(collectionName)
//     .find({ uid: { $eq: uid } })
//     .toArray();

//   // Return posts and their data
//   return posts.map((post) => {
//     return {
//       text: post.text,
//       tag: post.tag,
//       public: post.public,
//       tid: post.tid,
//       date: post.date,
//       type: post.type,
//       likes: post.tag,
//       uid: post.uid,
//       image: post.image,
//       username: post.username,
//     };
//   });
// }
