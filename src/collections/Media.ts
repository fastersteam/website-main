import { CollectionConfig } from "payload/types"

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["image/*"], 
  },
  fields: [
    {
      name: "alt",
      label: "Alt Text",
      type: "text",
      required: true,
    }
  ]
}
