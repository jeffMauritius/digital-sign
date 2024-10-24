import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import type { NextAuthOptions } from "next-auth"
import credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB()
        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password")

        if (!user) throw new Error("Wrong Email")

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password,
        )

        if (!passwordMatch) throw new Error("Wrong Password")
        return user
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
}
