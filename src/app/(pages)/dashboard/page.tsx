"use client"

import Link from "next/link"
import { signIn, useSession } from "next-auth/react"

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

export default function DashboardPage() {
  const { data: session } = useSession()

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
        <p>Welcome on the Dashboard page</p>
      ) : (
        <>
          <p>You are not logged in</p>
          <div className="flex gap-5 pt-3">
            <Button onClick={() => signIn("google")}>
              Sign in with google
            </Button>
            <Button onClick={() => signIn("github")}>
              Sign in with github
            </Button>
          </div>
        </>
      )}
    </ContentLayout>
  )
}
