"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Form } from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import SignerItem from "./signerItem"
import { useState } from "react"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  role: z.enum(["viewer", "editor", "signer", "admin"], {
    message: "Invalid role.",
  }),
})

export function StepTwo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
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

  const [signers, setSigners] = useState([<SignerItem key={0} />])

  const addSigner = () => {
    setSigners([...signers, <SignerItem key={signers.length} />])
  }

  return (
    <div>
      <div className="pb-5">
        <h1 className="text-2xl font-bold">Ajouter des signataires</h1>
        <p>Ajouter les personnes qui signeront le document.</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col flex-wrap w-full pt-5"
        >
          {signers}
          <div className="flex justify-end">
            <Button type="button" variant="outline" onClick={addSigner}>
              Ajouter un signataire
            </Button>
          </div>
        </form>
      </Form>

      <p className="text-slate-500 text-xs">Etape 2 sur 4</p>
    </div>
  )
}
