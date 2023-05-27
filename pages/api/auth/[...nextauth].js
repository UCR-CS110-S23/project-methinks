/* eslint-disable new-cap */
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
// import { isPasswordValid } from "@/lib/password";

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          const db = (await clientPromise).db(process.env.MONGODB_DB);

          // Add logic here to look up the user from the credentials supplied
          // const user = {
          //   name: "HI",
          //   email: "m@gmail.com",
          //   password: "123",
          // };
          // console.log(db.collection("users"));
          const user = await db.collection("users").findOne({
            email: credentials.email,
            // password: credentials.password,
          });

          // console.log(user);
          // const user = await db.collection("users").insertMany([
          //   // {
          //   //   name: "MARIAM",
          //   //   email: "MARIAM@gmail.com",
          //   //   password: "123",
          //   // },
          //   {
          //     name: "kkkkkk;ad",
          //     email: "ooooo@gmail.com",
          //     password: "kkkkkkkk",
          //   },
          //   {
          //     name: "BOB;ad",
          //     email: "bob@gmail.com",
          //     password: "bleh",
          //   },
          // ]);

          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            // return user;
            return {
              email: user.email,
              image: user.image,
              name: user.name,
              provider: user.provider,
              username: user.username,
            };
            // return {
            //   name: user.name,
            //   username: "b",
            //   email: user.email,
            // };
            // return user;
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            console.log("[...nextauth]: User not found!");
            return null;

            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
          // if (user) {
          //   // Any object returned will be saved in `user` property of the JWT
          //   return { name: "HI", email: "m@gmail.com" };
          //   // return user;
          // } else {
          //   // If you return null then an error will be displayed advising the user to check their details.
          //   console.log("USER NOT FOUND");
          //   return null;

          //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          // }
        },
      }),
    ],
    // adapter: MongoDBAdapter({
    //   db: (await clientPromise).db(process.env.MONGODB_DB),
    // }),
    adapter: MongoDBAdapter(clientPromise),

    // pages: {
    //   signIn: "/signin",
    // },
    // callbacks: {
    //   async signIn({ user, account, profile }) {
    //     if (account.provider === "google") {
    //       // first and last name attributes are available for GoogleProfile
    //       // -- https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/providers/google.ts
    //       user.name = {
    //         first: String(profile.given_name),
    //         last: String(profile.family_name),
    //       };
    //     }
    //     return true;
    //   },
    //   async session({ session, user }) {
    //     session.user.name = user.name;
    //     return session;
    //   },
    // },
    secret: process.env.SECRET,
    session: {
      // Set to jwt in order to CredentialsProvider works properly
      strategy: "jwt",
    },
    callbacks: {
      // async signIn({ user, account, profile }) {
      //   if (account.provider === "google") {
      //     // first and last name attributes are available for GoogleProfile
      //     // -- https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/providers/google.ts

      //     user.username = profile.name;
      //     // user.name = {
      //     //   first: String(profile.name.split(' ')[0]),
      //     //   last: String(profile.name.split(' ')[1])
      //     // };
      //   }
      //   return true;
      // },
      async jwt({ user, token, account }) {
        // console.log(user);
        if (account?.provider === "google") {
          user.username = user.name.toLowerCase().replace(/ /g, "_");
          user.provider = "google";
        }
        if (user) {
          token.user = user;
        }
        return token;
      },
      async session({ session, token }) {
        session.user = token.user;
        return session;
      },
    },
    // session: {
    //   strategy: "jwt",
    //   maxAge: 30 * 24 * 60 * 60, // 30 Days
    // },
  });
}

// const user = await db
//   .collection("users")
//   .findOne({ email: credentials.email });
// Add logic here to look up the user from the credentials supplied
// const user = {
//   name: "HI",
//   email: "AHHHH@gmail.com",
// };

// const storeUser = new User(newUser);

// await db.collection("users").insertOne(user, (err, result) => {
//   console.log("ATTEMPT");
//   if (err) {
//     console.error("Error inserting user:", err);
//     return;
//   }

//   console.log("User inserted successfully:");
// });

// await db.collection("users").updateOne({
//   email: session.user.email,
//   $set: { name: "HI", password: "123" },
// });
// try {
//   await db.collection("users").findOne({ email: "mcaro008@ucr.edu" });
// } catch (error) {
//   console.log(error);
// }

// Check if user exists
// if (!user) {
//   return null;
// }
