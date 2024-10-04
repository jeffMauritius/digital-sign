"use client"

import { useSession } from "next-auth/react"

import { ContentLayout } from "@/components/admin-panel/content-layout"

import { useTranslations } from "next-intl"
import withContext from "@/services/context/withContext"
import { Viewer, Worker } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"

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
  const pdfVersion = "3.4.120"
  const pdfWorkerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfVersion}/pdf.worker.js`

  const base64toBlob = (data: string) => {
    const base64WithoutPrefix =
      data?.substring("data:application/pdf;base64,".length) || ""

    const bytes = atob(base64WithoutPrefix)
    let length = bytes.length
    let out = new Uint8Array(length)

    while (length--) {
      out[length] = bytes.charCodeAt(length)
    }

    return new Blob([out], { type: "application/pdf" })
  }

  const blob = base64toBlob(newDocumentPdf)
  const url = URL.createObjectURL(blob)
  //const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <ContentLayout title={t("documents.title")}>
      {session && (
        <div className="h-">
          <div className="py-10">Document {newDocument?.name}</div>
          <div className="grid grid-cols-5 gap-4 pb-5">
            <div className="w-full col-span-3  overflow-auto">
              <Worker workerUrl={pdfWorkerUrl}>
                <div
                  style={{
                    height: "750px",
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Viewer
                    fileUrl={url}
                    //plugins={[defaultLayoutPluginInstance]}
                  />
                </div>
              </Worker>
            </div>
            <div className="col-span-2 border p-3">Form stepper</div>
          </div>
        </div>
      )}
    </ContentLayout>
  )
}

export default withContext(DocumentPageEdit)
