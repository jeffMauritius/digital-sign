"use client"

import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

import { ContentLayout } from "@/components/admin-panel/content-layout"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import AuthenticationWrapper from "@/components/authentication/authenticationWrapper"
import SignInForm from "@/components/authentication/signinForm"

export default function DashboardPage() {
  const { data: session } = useSession()

  console.log("session", session)

  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {session ? (
        <>
          <p>{`Welcome ${session.user?.name} you are logged with the email ${session.user?.email}`}</p>
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <div className="h-60 grid  gap-4 content-center">
          <div className="border p-3 rounded">
            <p className="text-sm">You are not logged in.</p>
            <div className="flex">
              <AuthenticationWrapper>
                <SignInForm />
              </AuthenticationWrapper>
            </div>
          </div>
        </div>
      )}
    </ContentLayout>
  )
}
