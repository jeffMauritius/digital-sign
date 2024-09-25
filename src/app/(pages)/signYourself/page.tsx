import { ContentLayout } from "@/components/admin-panel/content-layout"
import { useTranslations } from "next-intl"
import BreadcrumbComponent from "@/components/breadcrumbComponent"

export default function SignYourself() {
  const t = useTranslations()
  return (
    <ContentLayout title={t("sign.title")}>
      <BreadcrumbComponent t={t} name="signYourself" />
      {t("sign.title")}
    </ContentLayout>
  )
}
