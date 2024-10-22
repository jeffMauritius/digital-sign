"use client"
import React, { useState } from "react"
import { useSession } from "next-auth/react"

import { ContentLayout } from "@/components/admin-panel/content-layout"

import { useTranslations } from "next-intl"
import withContext from "@/services/context/withContext"

import { base64toBlob } from "@/services/helpers/base64toBlob"
import ViewerComponent from "@/components/documents/viewer"
import DocumentSettingsForm from "@/components/documents/settings"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import Draggable from "@/components/droppable/draggable"
import Droppable from "@/components/droppable/droppable"
import SignatureButton from "@/components/documents/edit/formSteps/signatureButton"

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

  const [items, setItems] = useState<string[]>([])

  const addItemsList = (e: DragEndEvent) => {
    const newItem = e.active.data.current?.title
    console.log("e.over?.id", e.over?.id)
    //if (e.over?.id !== "droppable" || !newItem) return
    const temp = [...items]
    temp.push(newItem)
    setItems(temp)
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  const blob = base64toBlob(newDocumentPdf)
  const url = URL.createObjectURL(blob)

  console.log("items", items)

  return (
    <ContentLayout title={t("documents.title")}>
      {session && (
        <div className="h-">
          <div className="py-10">Document {newDocument?.name}</div>
          <div className="grid grid-cols-5 gap-4 pb-5">
            <DndContext onDragEnd={addItemsList}>
              <div className="w-full col-span-3  overflow-auto">
                <div>
                  {/* <div className="absolute border h-screen z-50">
                    <Droppable items={items} />
                  </div>*/}

                  <ViewerComponent fileUrl={url} />
                </div>
              </div>
              <div className="col-span-2 border p-3">
                <DocumentSettingsForm />
              </div>
            </DndContext>
          </div>
        </div>
      )}
    </ContentLayout>
  )
}

export default withContext(DocumentPageEdit)
