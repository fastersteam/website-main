import type { Block } from "payload/types";

export const ContentBlock: Block = {
  slug: "contentBlock",
  fields: [
    {
      name: "text",
      label: "Text",
      type: "richText",
    },
    {
      name: "style",
      label: "Style",
      type: "select",
      options: [
        {
          label: "Standard",
          value: "standard",
        },
        {
          label: "Quote",
          value: "quote",
        },
      ],
    },
    {
      name: "media",
      label: "Media",
      type: "upload",
      relationTo: "media",
    },
  ],
};
