import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import TableContainer from "./tableContainer"

interface CardContainerProps {
  title: string
  description: string
  footerDescription: string
  data: any
}

const CardContainer: React.FC<CardContainerProps> = ({
  title,
  description,
  footerDescription,
  data,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {title} ({Object.values(data.signHeaderData).length})
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <TableContainer {...data} />
      </CardContent>
      <CardFooter>{footerDescription}</CardFooter>
    </Card>
  )
}

export default CardContainer
