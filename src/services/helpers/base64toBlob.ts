export const base64toBlob = (data: string) => {
    const base64WithoutPrefix =
      data?.substring("data:application/pdf;base64,".length) || ""

    const bytes = atob(base64WithoutPrefix)
    let length = bytes.length
    let out = new Uint8Array(length)

    while (length--) {
      out[length] = bytes.charCodeAt(length)
    }

    return new Blob([out], { type: "application/pdf" })
  }