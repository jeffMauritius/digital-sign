import { useLocale, useTranslations } from "next-intl"
import LangSelect from "./langSelect"

export default function LocaleSwitcher() {
  const t = useTranslations("langSwitcher")
  const locale = useLocale()

  return (
    <LangSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: t("en"),
        },
        {
          value: "fr",
          label: t("fr"),
        },
        {
          value: "es",
          label: t("es"),
        },
        {
          value: "de",
          label: t("de"),
        },
      ]}
      label={t("label")}
    />
  )
}
