"use client"
import { useRef, useState } from "react"
import { createDocument } from "@/actions/document/create"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import BreadcrumbComponent from "@/components/breadcrumbComponent"
import { useTranslations } from "next-intl"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import SelectComponent from "@/components/selectComponent"
import DocumentStatus from "@/enums/document-status.enum"

const CreateDocumentForm = () => {
  const t = useTranslations()
  const [error, setError] = useState<string>()
  const router = useRouter()
  const ref = useRef<HTMLFormElement>(null)

  const handleSubmit = async (formData: FormData) => {
    const r = await createDocument({
      title: (formData.get("title") as string) || "",
      folder: (formData.get("folder") as string) || "",
      fileName: (formData.get("fileName") as string) || "",
      description: (formData.get("description") as string) || "",
      owner: (formData.get("owner") as string) || "",
      signers: (formData.get("signers") as string) || "",
      status: (formData.get("status") as string) || "",
    })
    ref.current?.reset()
    return router.push("/sendRequest")
  }

  return (
    <ContentLayout title={t("sendRequest.title")}>
      <BreadcrumbComponent t={t} name="sendRequest" />
      <form ref={ref} action={handleSubmit} className="pt-5">
        <div className="grid grid-cols-2 gap-4 pb-5">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" required />
          </div>
          <div>
            <Label htmlFor="folder">Folder</Label>
            <Input id="folder" name="folder" required />
          </div>
          <div>
            <Label htmlFor="fileName">File Name</Label>
            <Input id="fileName" name="fileName" required />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input id="description" name="description" required />
          </div>
          <div>
            <Label htmlFor="owner">Owner</Label>
            <Input id="owner" name="owner" required />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <SelectComponent
              values={DocumentStatus}
              enumType="enums.status"
              name="status"
            />
          </div>
          <div>
            <Label htmlFor="signers">Signers</Label>
            <div className="flex items-center space-x-2">
              <Input id="signers" name="signers" required />
            </div>
          </div>
        </div>

        <Button type="submit">Create Document</Button>
      </form>
    </ContentLayout>
  )
}

export default CreateDocumentForm
