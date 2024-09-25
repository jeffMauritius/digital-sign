"use server"
import { connectDB } from "@/lib/mongodb"
import Document from "@/models/Document"
import { z } from "zod"

const DocumentValuesSchema = z.object({
  title: z.string(),
  folder: z.string(),
  fileName: z.string(),
  description: z.string(),
  owner: z.string(),
  status: z.string(),
  signers: z.string(),
})

type DocumentValues = z.infer<typeof DocumentValuesSchema>

export const createDocument = async (
  values: DocumentValues,
): Promise<Document | null> => {
  console.log("values", values)

  const parsedValues = DocumentValuesSchema.safeParse(values)
  if (!parsedValues.success) {
    console.error("Validation error:", parsedValues.error)
    return null
  }

  const { title, folder, fileName, description, owner, status, signers } =
    parsedValues.data

  try {
    await connectDB()

    const document = new Document({
      title,
      folder,
      fileName,
      description,
      owner,
      status,
      signers,
    })
    const saveDocument = await document.save()
    return saveDocument
  } catch (e) {
    console.error("Error creating document:", e)
    return null
  }
}
