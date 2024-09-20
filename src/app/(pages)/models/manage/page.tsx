import Link from "next/link"

import { ContentLayout } from "@/components/admin-panel/content-layout"
import BreadcrumbComponent from "@/components/breadcrumbComponent"
import { useTranslations } from "next-intl"

export default function NewPostPage() {
  const t = useTranslations()

  return (
    <ContentLayout title="manage models">
      <BreadcrumbComponent
        t={t}
        page="models"
        entity="models.label"
        name="models.manage"
      />
    </ContentLayout>
  )
}
