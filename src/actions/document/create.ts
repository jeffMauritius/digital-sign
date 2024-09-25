"use server"
import { connectDB } from "@/lib/mongodb"
import Document from "@/models/Document"

export const createDocument = async (values: any) => {
  console.log("values", values)
  const { title, folder, fileName, description, owner, status, signers } =
    values

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
  } catch (e) {
    console.log(e)
  }
}
