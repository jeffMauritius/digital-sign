"use client"

import React, { useState } from "react"
import { Button } from "../ui/button"
import { EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"
import { z } from "zod"

// Define a schema for the props using zod
const ToggleFullScreenPropsSchema = z.object({
  initialToggleIcon: z.boolean().optional(),
})

type ToggleFullScreenProps = z.infer<typeof ToggleFullScreenPropsSchema>

export default function ToggleFullScreen(props: ToggleFullScreenProps) {
  const parsedProps = ToggleFullScreenPropsSchema.parse(props)

  const [toggleIcon, setToggleIcon] = useState(
    parsedProps.initialToggleIcon ?? true,
  )

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      setToggleIcon(false)
      document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen) {
      setToggleIcon(true)
      document.exitFullscreen()
    }
  }

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            className="relative h-8 w-8 rounded-full mr-2"
            size="icon"
            onClick={toggleFullScreen}
          >
            {toggleIcon ? (
              <EnterFullScreenIcon className="h-4 w-4" />
            ) : (
              <ExitFullScreenIcon className="h-4 w-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Full screen</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
