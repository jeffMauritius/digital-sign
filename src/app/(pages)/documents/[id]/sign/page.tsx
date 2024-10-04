"use client"

import { useSession } from "next-auth/react"

import { ContentLayout } from "@/components/admin-panel/content-layout"

import { useTranslations } from "next-intl"

export default function DocumentPageEdit({
  params,
}: {
  params: { id: string }
}) {
  const { data: session, status } = useSession()
  const t = useTranslations()

  console.log("Document ID", params.id)

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <ContentLayout title={t("documents.title")}>
      {session && (
        <div className="">
          <div className="grid grid-cols gap-4 pb-5">
            Sign page for document ref ID {params.id}
          </div>
        </div>
      )}
    </ContentLayout>
  )
}
