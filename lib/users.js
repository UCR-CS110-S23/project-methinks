import clientPromise from "@/lib/mongodb";

export async function getUserData(uid) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.USERS_COLLECTION_NAME;

  const user = await db
    .collection(collectionName)
    .find({ uid: { $eq: uid } })
    .toArray();

  // getStaticPaths accepts serializable JSON
  return JSON.stringify(user);
}

export async function getAllUserIds() {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.USERS_COLLECTION_NAME;

  const users = await db
    .collection(collectionName)
    .find({ uid: { $exists: true } })
    .toArray();

  // getStaticPaths accepts array of objects where String(id)
  return users.map((user) => {
    return {
      params: {
        id: user.uid.toString(),
      },
    };
  });
}
