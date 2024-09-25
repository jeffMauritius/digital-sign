import mongoose, { Schema, model } from "mongoose"
import { z } from "zod"

export const DocumentSchemaZod = z.object({
  _id: z.string(),
  title: z.number(),
  folder: z.string(),
  fileName: z.string(),
  description: z.string().optional(),
  owner: z.string(),
  signers: z.string(),
  status: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Document = z.infer<typeof DocumentSchemaZod>

const DocumentSchema = new Schema<Document>(
  {
    title: {
      type: Number,
      required: true,
    },
    folder: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    owner: {
      type: String,
      required: true,
    },
    signers: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const Document =
  mongoose.models?.Document || model<Document>("Document", DocumentSchema)
export default Document
