"use client"

import { useSession } from "next-auth/react"

import { ContentLayout } from "@/components/admin-panel/content-layout"

import AuthenticationWrapper from "@/components/authentication/authenticationWrapper"
import AuthForm from "@/components/authentication/authForm"
import { useTranslations } from "next-intl"
import DocumentTable from "@/components/documents/table"

export default function DocumentsPage() {
  const { data: session, status } = useSession()
  const t = useTranslations()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <ContentLayout title={t("document.title")}>
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
        <div className="">
          <div className="grid grid-cols gap-4 pb-5">
            <DocumentTable />
          </div>
        </div>
      )}
    </ContentLayout>
  )
}
