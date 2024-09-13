import Link from "next/link"
import Image from "next/image"
import { MenuIcon, PanelsTopLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Menu } from "@/components/admin-panel/menu"
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <SheetHeader>
          <Button
            className="flex justify-start items-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <Link href="/dashboard" className="flex items-center gap-2">
              <SheetTitle className="font-bold text-lg">
                <Image
                  src={"/logo-icon.png"}
                  alt={"logo"}
                  width={60}
                  height={60}
                />
              </SheetTitle>
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  )
}
