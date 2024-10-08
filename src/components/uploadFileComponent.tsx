import React, { use, useCallback, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import withContext from "@/services/context/withContext"
import { createDocument } from "@/actions/document/create"

interface UploadFileComponentProps {
  context: {
    dispatch: React.Dispatch<any>
  }
}

function UploadFileComponent({
  context: { dispatch },
}: UploadFileComponentProps) {
  const t = useTranslations()
  const router = useRouter()
  const [fileName, setFileName] = useState()

  useEffect(() => {
    if (fileName) {
      createDocument({ name: fileName, status: "draft" })
    }
  }, [fileName])

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        const reader = new FileReader()
        reader.onload = e => {
          const data = e.target?.result
          setFileName(file.name)

          // create a new document
          router.push("/documents/1/edit")

          dispatch({
            type: "SET_NEW_DOCUMENT_PDF",
            payload: data,
          })
          dispatch({
            type: "SET_DOCUMENT_NAME",
            payload: fileName,
          })
          dispatch({
            type: "SET_NEW_DOCUMENT",
            payload: file,
          })
        }

        reader.readAsDataURL(file)
      }
    },
    [dispatch, router, fileName],
  )

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div
      className="flex items-center justify-center w-full"
      {...getRootProps({
        onClick: event => event.stopPropagation(),
      })}
    >
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">{t(`documents.uploadTitle`)}</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {t(`documents.uploadSubtitle`)}
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          {...getInputProps()}
        />
      </label>
    </div>
  )
}

export default withContext(UploadFileComponent)
