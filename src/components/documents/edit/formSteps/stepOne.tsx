"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DateFormat } from "@/enums/date-format.enums"
import { TimeZone } from "@/enums/time-zone.enums"
import { Separator } from "@/components/ui/separator"

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  DocumentAccess: z.string().nonempty({
    message: "Document access is required.",
  }),
  DateFormat: z.string().nonempty({
    message: "Date format is required.",
  }),
  TimeZone: z.string().nonempty({
    message: "Time zone is required.",
  }),
})

export function StepOne() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      DocumentAccess: "",
      DateFormat: "",
      TimeZone: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <div className="pb-5">
        <h1 className="text-2xl font-bold">Paramétres du document</h1>
        <p>Configurer les paramétres pour ce document.</p>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 pb-5"
      >
        <FormField
          control={form.control as any}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input placeholder="Document title" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="DocumentAccess"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Droits d'accés`}</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selectionner droits d'accès" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="noRestrictions">
                      Pas de restrictions
                    </SelectItem>
                    <SelectItem value="requireAccount">
                      Un compte est requis
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center space-x-3 ">
          <FormField
            control={form.control}
            name="DateFormat"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Format de la date</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionner le format" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(DateFormat).map(format => (
                        <SelectItem key={format} value={format}>
                          {format}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="TimeZone"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Fuseau horaire</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionner le fuseau horaire" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(TimeZone).map(zone => (
                        <SelectItem key={zone} value={zone}>
                          {zone}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
      <p className="text-slate-500 text-xs">Etape 1 sur 4</p>
    </Form>
  )
}
