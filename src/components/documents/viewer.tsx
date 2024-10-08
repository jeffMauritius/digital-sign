import React from "react"
import { Viewer, Worker } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"

export default function ViewerComponent({ fileUrl }: { fileUrl: string }) {
  const pdfVersion = "3.11.174"
  const pdfWorkerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfVersion}/pdf.worker.js`
  return (
    <div>
      <Worker workerUrl={pdfWorkerUrl}>
        <div
          style={{
            height: "750px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Viewer fileUrl={fileUrl} />
        </div>
      </Worker>
    </div>
  )
}
