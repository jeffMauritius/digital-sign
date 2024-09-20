import { Badge } from "../ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import TableContainer from "./tableContainer"

const CardContainer = (props: any) => {
  const { config, cardID, t } = props
  const itemsNumber = Object.values(
    config?.tab?.table?.data[cardID].rowData,
  ).length
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <>
            {t(`dashboard.table.title.${cardID}`)}
            <Badge className="rounded-xl ml-3">{itemsNumber}</Badge>
          </>
        </CardTitle>

        <CardDescription>
          {t(`dashboard.table.description.${cardID}`)}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <TableContainer config={config} tableID={cardID} />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default CardContainer
