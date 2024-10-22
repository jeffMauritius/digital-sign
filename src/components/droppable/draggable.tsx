import { useDraggable } from "@dnd-kit/core"
import { FC } from "react"
import { CSS } from "@dnd-kit/utilities"
import { Button } from "../ui/button"
import { PencilLine } from "lucide-react"

interface DraggableProps {
  children: string
}

const Draggable: FC<DraggableProps> = props => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.children,
    data: { title: props.children },
  })

  return (
    <Button
      ref={setNodeRef}
      variant={"outline"}
      className={""}
      style={{ transform: CSS.Translate.toString(transform) }}
      {...attributes}
      {...listeners}
    >
      <PencilLine size={14} className="mr-2" />
      {props.children}
    </Button>
  )
}

export default Draggable
