import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"
import { EnvelopeOpenIcon, Pencil1Icon } from "@radix-ui/react-icons"

const TableContainer = (data: any) => {
  console.log("dataYYYYY", data)

  return (
    <Table
      className=""
      containerClassname="h-fit max-h-80 overflow-y-auto relative"
    >
      <TableCaption>{data.tableCaption}</TableCaption>
      <TableHeader>
        <TableRow>
          {Object.values(data.signHeader).map((item: any) => (
            <TableHead key={item}>{item}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {Object.values(data.signHeaderData).map((d: any) => (
          <TableRow key={d}>
            <TableCell className="font-medium">{d.title}</TableCell>
            <TableCell>{d.file}</TableCell>
            <TableCell>{d.owner}</TableCell>
            <TableCell>{d.signer}</TableCell>
            <TableCell>
              <Button size={"sm"}>
                <Pencil1Icon className="mr-2 h-4 w-4" />
                {d.action}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter></TableFooter>
    </Table>
  )
}

export default TableContainer
