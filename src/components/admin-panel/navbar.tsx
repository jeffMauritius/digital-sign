import { ModeToggle } from "@/components/navbar/mode-toggle"
import { UserNav } from "@/components/admin-panel/user-nav"
import Image from "next/image"
import ToggleFullScreen from "../navbar/toggleFullScreen"
import LocaleSwitcher from "../navbar/langSwitcher"
import { SearchComponent } from "../navbar/searchComponent"
import { APP_NAME } from "@/constants/common"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import Link from "next/link"

interface NavbarProps {
  title: string
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <Link
          href={"/"}
          className="flex items-center space-x-4 lg:space-x-0 pr-10"
        >
          <Image src="/logo-icon.png" alt="Logo" width={30} height={30} />
          <h1 className="font-bold">{APP_NAME}</h1>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/documents" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documents
                </NavigationMenuLink>
              </Link>
              <Link href="/models" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Modéles
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end ">
          <SearchComponent />
          <ToggleFullScreen />
          <ModeToggle />
          <LocaleSwitcher />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
