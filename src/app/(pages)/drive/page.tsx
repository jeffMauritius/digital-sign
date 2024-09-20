import { ContentLayout } from "@/components/admin-panel/content-layout"
import BreadcrumbComponent from "@/components/breadcrumbComponent"
import { useTranslations } from "next-intl"

export default function DrivePage() {
  const t = useTranslations()

  return (
    <ContentLayout title="Drive">
      <BreadcrumbComponent t={t} page="drive" name="drive" />
      Drive
    </ContentLayout>
  )
}
