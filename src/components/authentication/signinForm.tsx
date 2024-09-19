"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { signIn } from "next-auth/react"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

const SignInForm = () => {
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    })
    if (res?.error) {
      setError(res.error as string)
    }
    if (res?.ok) {
      return router.push("/dashboard")
    }
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" name="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
            <div className="flex  ">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => signIn("google")}
              >
                with Google
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => signIn("github")}
              >
                with Github
              </Button>
            </div>
            <div className="flex items-center">
              <Link
                href="/register"
                className="ml-auto inline-block text-sm underline"
              >
                Don't have an account?
              </Link>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default SignInForm
