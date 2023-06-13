/* eslint-disable new-cap */
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

import { isPasswordValid } from "@/lib/password";
import { generateRandomUsername } from "@/lib/username";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const db = (await clientPromise).db(process.env.MONGODB_DB);
        const collectionName = process.env.USERS_COLLECTION_NAME;

        const user = await db.collection(collectionName).findOne({
          email: credentials.email,
        });

        // Check if user exists
        if (!user) {
          console.log("[...nextauth]: User not found!");
          return null;
        }

        // Validate password
        const validPassword = await isPasswordValid(
          credentials.password,
          user.password
        );

        if (!validPassword) {
          console.log("[...nextauth]: Wrong password");
          return null;
        }

        // Any object returned will be saved in `user` property of the JWT
        return {
          name: user.name,
          email: user.email,
          image: user.image,
          uid: user.uid,
          username: user.username,
          provider: user.provider,
          admin: user.admin,
          bio: user.bio,
        };
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    // Set to jwt in order for CredentialsProvider to work properly
    strategy: "jwt",
  },
  callbacks: {
    // Executed after a user successfully signs in using any provider
    async signIn({ user, account, isNewUser }) {
      // Add custom fields to the user object
      if (account.provider === "google") {
        user.uid = account.providerAccountId;
        user.username = generateRandomUsername(
          user.name.split(" ")[0].toLowerCase()
        );
        user.provider = account.provider;
        user.admin = false;
        user.bio = "Feelin Supersonic";
      }
      return true;
    },

    // Used to generate a JSON Web Token (JWT) for a user session
    async jwt({ token, session, user, trigger }) {
      if (user) {
        token.user = user;
      }
      // Listens for mutated attributes in session object
      if (trigger === "update" && session?.name) {
        token.user.name = session.name;
      }
      if (trigger === "update" && session?.username) {
        token.user.username = session.username;
      }
      if (trigger === "update" && session?.bio) {
        token.user.bio = session.bio;
      }

      return token;
    },

    async session({ session, token }) {
      // Add custom fields to the session object
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    newUser: "/newUser",
  },
};

export default NextAuth(authOptions);
