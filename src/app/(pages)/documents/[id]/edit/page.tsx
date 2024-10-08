"use client"

import { useSession } from "next-auth/react"

import { ContentLayout } from "@/components/admin-panel/content-layout"

import { useTranslations } from "next-intl"
import withContext from "@/services/context/withContext"

import { base64toBlob } from "@/services/helpers/base64toBlob"
import { View } from "lucide-react"
import Viewer from "@/components/documents/viewer"
import ViewerComponent from "@/components/documents/viewer"
import DocumentSettingsForm from "@/components/documents/settings"

function DocumentPageEdit({
  context,
  params,
}: {
  context: any
  params: { id: string }
}) {
  const { data: session, status } = useSession()
  const t = useTranslations()
  const { newDocument, newDocumentPdf } = context

  if (status === "loading") {
    return <div>Loading...</div>
  }

  const blob = base64toBlob(newDocumentPdf)
  const url = URL.createObjectURL(blob)

  return (
    <ContentLayout title={t("documents.title")}>
      {session && (
        <div className="h-">
          <div className="py-10">Document {newDocument?.name}</div>
          <div className="grid grid-cols-5 gap-4 pb-5">
            <div className="w-full col-span-3  overflow-auto">
              <ViewerComponent fileUrl={url} />
            </div>
            <div className="col-span-2 border p-3">
              <DocumentSettingsForm />
            </div>
          </div>
        </div>
      )}
    </ContentLayout>
  )
}

export default withContext(DocumentPageEdit)
