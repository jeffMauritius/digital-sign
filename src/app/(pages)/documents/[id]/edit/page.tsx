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
    <ContentLayout title={t("document.title")}>
      {session && (
        <div className="h-">
          <div className="py-10">
            Document page Edit for document ref ID {params.id}
          </div>
          <div className="grid grid-cols-5 gap-4 pb-5">
            <div className="col-span-3 border p-3">Viewer</div>
            <div className="col-span-2 border p-3">Form stepper</div>
          </div>
        </div>
      )}
    </ContentLayout>
  )
}
