"use client"

import React, { useTransition } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { Languages } from "lucide-react"
import { setUserLocale } from "@/services/locale"
import { Locale } from "@/i18n/config"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"
import { useTranslations } from "next-intl"

type Props = {
  defaultValue: string
  items: Array<{ value: string; label: string }>
  label: string
}

export default function LangSelect({ defaultValue, items, label }: Props) {
  const [isPending, startTransition] = useTransition()
  const t = useTranslations()

  function onChange(value: string) {
    const locale = value as Locale
    startTransition(() => {
      setUserLocale(locale)
    })
  }

  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="relative h-8 w-8 rounded-full mr-2"
                size="icon"
              >
                <Languages className="h-5 w-5" />
                <span className="sr-only">{t(`navbar.toggleLanguage`)}</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            {t(`navbar.toggleLanguage`)}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent align="center">
        {items.map(item => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
