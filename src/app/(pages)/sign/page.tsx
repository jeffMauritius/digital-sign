import { ContentLayout } from "@/components/admin-panel/content-layout"
import { useTranslations } from "next-intl"
import BreadcrumbComponent from "@/components/breadcrumbComponent"

export default function DashboardPage() {
  const t = useTranslations()
  return (
    <ContentLayout title={t("sign.title")}>
      <BreadcrumbComponent t={t} name="sign" />
      {t("sign.title")}
    </ContentLayout>
  )
}
