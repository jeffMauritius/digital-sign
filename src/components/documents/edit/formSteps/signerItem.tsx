import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { PencilLineIcon, Trash2Icon } from "lucide-react"
import React from "react"
import { useForm } from "react-hook-form"

export default function SignerItem() {
  const form = useForm()

  return (
    <div className="flex w-full space-x-2 border p-3 mb-2 rounded-sm">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input type="email" placeholder="Email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="role"
        render={({ field }) => (
          <FormItem className="">
            <FormControl>
              <Select {...field}>
                <SelectTrigger>
                  <SelectValue />
                  <PencilLineIcon className="h-4 w-4" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="viewer">Viewer</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="signer">Signer</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex justify-end">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            // Handle delete action
          }}
        >
          <Trash2Icon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
