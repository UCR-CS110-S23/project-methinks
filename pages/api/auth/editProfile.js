import clientPromise from "@/lib/mongodb";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function editProfile(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ success: false, message: "You must be logged in." });
    return;
  }

  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const collectionName = process.env.USERS_COLLECTION_NAME;

  const newProfile = req.body;

  // Check if username already exists
  if (newProfile.username !== session?.user?.username) {
    const userAlreadyExists = await db
      .collection(collectionName)
      .findOne({ username: newProfile.username });

    if (userAlreadyExists) {
      res.status(422).json({
        success: false,
        message: "Username already exists!",
        userAlreadyExists: true,
      });
      return;
    }
  }

  try {
    if (newProfile.username !== session?.user?.username) {
      await db.collection(collectionName).updateOne(
        {
          uid: session.user.uid,
        },
        {
          $set: {
            name: newProfile.name,
            username: newProfile.username,
            bio: newProfile.bio,
          },
        }
      );

      const postsCollectionName = process.env.POSTS_COLLECTION_NAME;
      // update all previous user posts/comments with the new username
      await db.collection(postsCollectionName).updateMany(
        { uid: { $eq: session.user.uid } },
        {
          $set: {
            username: newProfile.username,
            "comments.$[comment].username": newProfile.username,
          },
        },
        {
          arrayFilters: [{ "comment.uid": session.user.uid }],
        }
      );
    } else {
      await db.collection(collectionName).updateOne(
        {
          uid: session.user.uid,
        },
        {
          $set: {
            name: newProfile.name,
            bio: newProfile.bio,
          },
        }
      );
    }
    res.status(200).json({
      success: true,
      message: "Profile updated successfuly",
    });
  } catch (error) {
    console.error("Failed to update profile:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update profile:" });
  }
}
