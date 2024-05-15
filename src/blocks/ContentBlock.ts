import { Block } from "payload/types";
import { MediaBlock } from "./MediaBlock";

export const ContentBlock: Block = {
  slug: 'contentBlock',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'richText'
    },
    {
      name: 'media',
      label: 'Media',
      type: 'blocks',
      blocks: [MediaBlock]
    }
  ]
}
