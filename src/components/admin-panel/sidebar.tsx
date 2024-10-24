import Link from "next/link"

import { cn } from "@/lib/utils"
import Image from "next/image"

import { useStore } from "@/hooks/use-store"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/admin-panel/menu"
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle"
import { SidebarToggle } from "@/components/admin-panel/sidebar-toggle"

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, state => state)

  if (!sidebar) return null

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        sidebar?.isOpen === false ? "w-[90px]" : "w-72",
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0",
          )}
          variant="link"
          asChild
        >
          <Link href="/dashboard" className="flex items-center gap-2">
            {sidebar?.isOpen === false ? (
              <Image
                src={"/logo-icon.png"}
                alt={"logo"}
                width={100}
                height={40}
              />
            ) : (
              <Image src={"/logo.png"} alt={"logo"} width={120} height={50} />
            )}
          </Link>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  )
}
