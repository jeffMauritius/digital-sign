import { ContentLayout } from "@/components/admin-panel/content-layout"
import BreadcrumbComponent from "@/components/breadcrumbComponent"
import { useTranslations } from "next-intl"

export default function CreateModel() {
  const t = useTranslations()
  return (
    <ContentLayout title="create models">
      <BreadcrumbComponent
        t={t}
        page="models"
        entity="models.label"
        name="models.create"
      />
    </ContentLayout>
  )
}
