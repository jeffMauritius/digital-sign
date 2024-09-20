import { ContentLayout } from "@/components/admin-panel/content-layout"
import BreadcrumbComponent from "@/components/breadcrumbComponent"
import { useTranslations } from "next-intl"

export default function SendRequest() {
  const t = useTranslations()

  return (
    <ContentLayout title="Dashboard">
      <BreadcrumbComponent t={t} name="sendRequest" />
      digital sign
    </ContentLayout>
  )
}
