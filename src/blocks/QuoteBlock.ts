import { Block } from "payload/types";

export const QuoteBlock: Block = {
  slug: 'quoteBlock',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'richText'
    }
  ]
}
