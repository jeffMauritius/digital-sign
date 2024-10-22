/* eslint-disable react/display-name */
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const CardItem = React.forwardRef(
  (props: any, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} {...props}>
        <Card className="w-[150px] h-14">
          <CardContent>signature</CardContent>
        </Card>
      </div>
    )
  },
)
