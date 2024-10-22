import { useDroppable } from "@dnd-kit/core"
import { FC } from "react"

interface DroppableProps {
  items: string[]
}

const Droppable: FC<DroppableProps> = props => {
  const { setNodeRef } = useDroppable({
    id: "droppable",
  })

  return (
    <ul className={""} ref={setNodeRef}>
      {props.items?.map((item, idx) => (
        <div key={`${item}-${idx}`} className={""}>
          {item}
        </div>
      ))}
    </ul>
  )
}

export default Droppable
