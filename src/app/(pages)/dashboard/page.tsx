"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"

import { ContentLayout } from "@/components/admin-panel/content-layout"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import AuthenticationWrapper from "@/components/authentication/authenticationWrapper"
import AuthForm from "@/components/authentication/authForm"
import { useTranslations } from "next-intl"
import TabContainer from "@/components/dashboard/tabContainer"
import data from "@/app/data/dashboard/index.json"

export default function DashboardPage() {
  const { data: session } = useSession()
  const t = useTranslations()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <ContentLayout title={t("dashboard.title")}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">{t("breadcrumb.home")}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{t("breadcrumb.dashboard")}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {!session && (
        <div className="h-60 grid gap-4 content-center" aria-live="polite">
          <div className="border p-3 rounded">
            <p className="text-sm">You are not logged in.</p>
            <div className="flex">
              <AuthenticationWrapper>
                <AuthForm />
              </AuthenticationWrapper>
            </div>
          </div>
        </div>
      )}
      {session && (
        <div className="pt-5">
          <TabContainer data={data} />
        </div>
      )}
    </ContentLayout>
  )
}
