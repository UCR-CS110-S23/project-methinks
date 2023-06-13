// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session.user.admin) {
    res.status(401).json({ message: "You must be authorized." });
    return;
  }
  res.status(200).json({ name: "John Doe" });
}
