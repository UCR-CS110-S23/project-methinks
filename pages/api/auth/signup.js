import clientPromise from "@/lib/mongodb";
import { hashPassword } from "@/lib/password";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const newUser = req.body;
    const db = (await clientPromise).db(process.env.MONGODB_DB);
    // await db.connect();

    // Check if user exists
    const userExists = await db
      .collection("users")
      .findOne({ email: newUser.email });
    if (userExists) {
      res.status(422).json({
        success: false,
        message: "A user with the same email already exists!",
        userExists: true,
      });
      return;
    }

    // Hash Password
    newUser.password = await hashPassword(newUser.password);

    await db.collection("users").insertOne(newUser);

    // // Store new user
    // const storeUser = new User(newUser);
    // await storeUser.save();

    res
      .status(201)
      .json({ success: true, message: "User signed up successfuly" });
  } else {
    res.status(400).json({ success: false, message: "Invalid signup!" });
  }
}
