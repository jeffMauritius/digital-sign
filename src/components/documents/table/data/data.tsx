import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons"
import { CircleCheck, Clock8, Circle, CircleEllipsis } from "lucide-react"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "Inbox",
    label: "Inbox",
    icon: EnvelopeClosedIcon,
    color: "text-blue-200",
  },
  {
    value: "Pending",
    label: "Pending",
    icon: Clock8,
    color: "text-fuchsia-200",
  },
  {
    value: "Completed",
    label: "Completed",
    icon: CircleCheck,
    color: "text-teal-200",
  },
  {
    value: "Draft",
    label: "Draft",
    icon: Circle,
    color: "text-lime-200",
  },
  {
    value: "All",
    label: "All",
    icon: CircleEllipsis,
    color: "text-amber-200",
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]
