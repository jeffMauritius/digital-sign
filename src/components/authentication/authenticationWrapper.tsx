"use client"
import * as React from "react"
import { Button } from "../ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "../ui/drawer"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { useSession } from "next-auth/react"

const AuthenticationWrapper = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const { data: session } = useSession()
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <span className="inline-block align-middle  text-sm ">
            Already have an account ?
            <Button className="p-2" variant={"link"}>
              Sign in
            </Button>
            don&apos;t have an account ?
            <Button className="p-2" variant={"link"}>
              Sign up
            </Button>
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">{children}</DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">{session ? "Sign out" : "Sign in"}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="px-4">{children}</div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default AuthenticationWrapper
