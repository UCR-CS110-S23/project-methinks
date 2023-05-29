/* eslint-disable new-cap */
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

import { isPasswordValid } from "@/lib/password";
import { generateRandomUsername } from "@/lib/generate_username";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const db = (await clientPromise).db(process.env.MONGODB_DB);

        const user = await db.collection("users").findOne({
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
    // executed after a user successfully signs in using any provider
    async signIn({ user, account, isNewUser }) {
      // Add custom fields to the user object
      if (account.provider === "google") {
        user.uid = account.providerAccountId;
        user.username = generateRandomUsername(
          user.name.split(" ")[0].toLowerCase()
        );
        user.provider = account.provider;
        user.admin = false;
      }

      console.log("isNewUser", isNewUser);
      return true;
    },

    // used to generate a JSON Web Token (JWT) for a user session
    async jwt({ user, token, account }) {
      if (user) {
        token.user = user;
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
    // signOut: "/signin",
    newUser: "/newUser",
  },
};

export default NextAuth(authOptions);
