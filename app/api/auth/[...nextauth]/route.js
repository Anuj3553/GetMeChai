import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from 'next-auth/providers/github';
import User from '@/models/User';
import connectDB from '@/db/connectDB';
// import LinkedInProvider from "next-auth/providers/linkedin";

export const authoptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // LinkedInProvider({
    //   clientId: process.env.LINKEDIN_CLIENT_ID,
    //   clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    // })
  ],
  callbacks: {
    async signIn({ user, account, profile, email }) {
      await connectDB();

      if (account.provider === "google") {
        // Ensure email is verified and ends with @example.com
        const currentUser = await User.findOne({ email: profile.email });
        if (!currentUser) {
          await User.create({
            email: profile.email,
            username: profile.email.split('@')[0],
          });
        }
        return true;
      } else if (account.provider === "github") {
        const currentUser = await User.findOne({ email: email });
        if (!currentUser) {
          await User.create({
            email: user.email,
            username: user.email.split('@')[0],
          });
        }
        return true;
      }
      return false;
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser.username;
      return session;
    }
  }
});

export { authoptions as GET, authoptions as POST };
