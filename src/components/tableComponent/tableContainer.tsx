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
import { Pencil1Icon } from "@radix-ui/react-icons"
import { Badge } from "@/components/ui/badge"

const TableContainer = (props: any) => {
  const { config, tableID } = props
  const { tab } = config

  return (
    <Table
      className=""
      containerClassname="h-fit max-h-80 overflow-y-auto relative"
    >
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          {Object.values(tab?.table?.data[tableID].headerLabel).map(
            (item: any) => (
              <TableHead key={item}>{item}</TableHead>
            ),
          )}
        </TableRow>
      </TableHeader>

      <TableBody>
        {Object.values(tab?.table?.data[tableID].rowData).map(
          (d: any, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
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
          ),
        )}
      </TableBody>

      <TableFooter></TableFooter>
    </Table>
  )
}

export default TableContainer
