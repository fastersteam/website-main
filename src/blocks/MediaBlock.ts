import { Block } from "payload/types";

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    {
      name: 'media',
      label: 'Media',
      type: 'upload',
      relationTo: 'media',
      required: true
    },
    {
      name: 'size',
      type: 'select',
      options: [
        {
          label: 'Auto',
          value:'auto'
        },
        {
          label: 'Half Screen',
          value:'halfScreen'
        },
        {
          label: 'Full Screen',
          value: 'fullScreen'
        }
      ],
      defaultValue: 'auto',
    },
    {
      name: 'position',
      type: 'select',
      options: [
        {
          label: 'Left',
          value: 'left'
        },
        {
          label: 'Right',
          value: 'right'
        },
        {
          label: 'Center',
          value: 'center'
        }
      ],
      defaultValue: 'left',
    }
  ]
}
