"use client"

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
import { useRouter } from "next/navigation"
import { useState, useRef } from "react"
import { register } from "@/actions/register"

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"

const SignUpForm = () => {
  const [error, setError] = useState<string>()
  const router = useRouter()
  const ref = useRef<HTMLFormElement>(null)

  const handleSubmit = async (formData: FormData) => {
    const r = await register({
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("fullname"),
    })
    ref.current?.reset()
    if (r?.error) {
      setError(r.error)
      return
    } else {
      return router.push("/dashboard")
    }
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={ref} action={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="fullname">Full name</Label>
                <Input
                  id="fullname"
                  name="fullname"
                  placeholder="Max"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <div className="flex">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => signIn("google")}
              >
                Sign up with Google
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => signIn("github")}
              >
                Sign up with GitHub
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default SignUpForm
