"use client"

import { useSession } from "next-auth/react"

import { ContentLayout } from "@/components/admin-panel/content-layout"

import AuthenticationWrapper from "@/components/authentication/authenticationWrapper"
import AuthForm from "@/components/authentication/authForm"
import { useTranslations } from "next-intl"
import TabContainer from "@/components/tableComponent/tabContainer"
import config from "@/components/tableComponent/config.json"
import UploadFileComponent from "@/components/uploadFileComponent"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const t = useTranslations()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <ContentLayout title={t("dashboard.title")}>
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
        <div className="pt-10">
          <div className="grid grid-cols gap-4 pb-5">
            <UploadFileComponent />
          </div>
          <TabContainer config={config} page="dashboard" t={t} />
        </div>
      )}
    </ContentLayout>
  )
}
