import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"
import Link from "next/link"
export default function BreadcrumbComponent(props: {
  t: any
  name: string
  entity?: string
  page?: string
}) {
  const { t, name, entity, page } = props
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/dashboard">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {entity && (
          <>
            <BreadcrumbItem>
              <BreadcrumbPage>{t(`breadcrumb.${entity}`)}</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{t(`breadcrumb.${name}`)}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
