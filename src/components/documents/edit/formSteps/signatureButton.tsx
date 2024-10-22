"use client"

import React from "react"
import { useDraggable } from "@dnd-kit/core"
import Draggable from "@/components/droppable/draggable"

const itemsList = [
  "Signature",
  "Initials",
  "Email",
  "Nom",
  "Date",
  "Text",
  "Numero",
  "Radio",
  "Case à cocher",
  "Liste déroulante",
]

export function SignatureButton() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "unique-id",
  })

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined
  return (
    <>
      {itemsList.map(item => (
        <Draggable key={item}>{item}</Draggable>
      ))}
    </>
  )
}

export default SignatureButton
