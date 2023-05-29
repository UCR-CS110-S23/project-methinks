import clientPromise from "@/lib/mongodb";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function signup(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.USERS_COLLECTION_NAME;

  const { username } = req.body;

  console.log("req", req.body);
  console.log(session.user.uid, session.user.username, username);

  // Check if user exists
  const userAlreadyExists = await db
    .collection(collectionName)
    .findOne({ username: username });

  if (userAlreadyExists) {
    res.status(422).json({
      success: false,
      message: "An account with this username already exists!",
      userAlreadyExists: true,
    });
    return;
  }
  await db.collection(collectionName).updateOne(
    {
      uid: session.user.uid,
    },
    {
      $set: {
        username,
      },
    }
  );
  res
    .status(200)
    .json({ success: true, message: "Username updated successfuly" });
}
