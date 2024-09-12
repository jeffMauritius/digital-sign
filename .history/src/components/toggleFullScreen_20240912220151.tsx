"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function ToggleFullScreen() {
  const [toggleIcon, setToggleIcon] = useState(true);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      setToggleIcon(false);
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      setToggleIcon(true);
      document.exitFullscreen();
    }
  };

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
        <TooltipContent side="bottom">Switch Theme</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
