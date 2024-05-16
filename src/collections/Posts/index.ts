import type { CollectionConfig } from "payload/types";

import { admins } from "../../access/admins";
import { adminsAndPublished } from "../../access/adminsAndPublished";
import { ContentBlock } from "../../blocks/ContentBlock";
import formatSlug from "../../utilities/formatSlug";
import { populateAuthors } from "./populateAuthors";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug"],
  },
  hooks: {
    afterRead: [populateAuthors],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsAndPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "authors",
      type: "relationship",
      relationTo: "users",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "populatedAuthors",
      type: "array",
      admin: {
        readOnly: true,
        disabled: true,
      },
      access: {
        update: () => false,
      },
      fields: [
        {
          name: "id",
          type: "text",
          required: true,
        },
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "photo",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "publishedOn",
      type: "date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === "published" && !value) {
              return new Date();
            }
            return value;
          },
        ],
      },
    },
    {
      name: "content",
      type: "blocks",
      required: true,
      blocks: [ContentBlock],
      minRows: 1,
      maxRows: 10,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
  ],
};

export default Posts;
