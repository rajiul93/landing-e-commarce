import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Control } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

interface FormFileInputProps {
  name: string
  label: string
  control: Control<any>
  description?: string
  accept?: string // 👈 allow custom types: "image/*,application/pdf,video/*"
}

const FormFileInput = ({
  name,
  label,
  control,
  description,
  accept = "image/*,application/pdf,video/*", // default: image + pdf + video
}: FormFileInputProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [fileType, setFileType] = useState<string | null>(null)

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value, onChange, ...fieldProps } }) => {
        useEffect(() => {
          if (value instanceof File) {
            const url = URL.createObjectURL(value)
            setPreviewUrl(url)
            setFileType(value.type)
          } else {
            setPreviewUrl(null)
            setFileType(null)
          }
        }, [value])

        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <div className="flex flex-col gap-2">
                {previewUrl && (
                  <div className="border rounded-md p-2">
                    {fileType?.startsWith("image/") && (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-40 object-cover rounded"
                      />
                    )}
                    {fileType?.startsWith("video/") && (
                      <video
                        src={previewUrl}
                        controls
                        className="w-full h-40 object-cover rounded"
                      />
                    )}
                    {fileType === "application/pdf" && (
                      <iframe
                        src={previewUrl}
                        className="w-full h-40 rounded"
                        title="PDF Preview"
                      />
                    )}
                  </div>
                )}
                <Input
                  type="file"
                  accept={accept}
                  onChange={(e) => onChange(e.target.files?.[0] || null)}
                  {...fieldProps}
                />
              </div>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default FormFileInput
