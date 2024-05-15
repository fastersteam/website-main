import type { CollectionConfig } from "payload/types";

import { admins } from "../../access/admins";
import { adminsAndSelf } from "../../access/adminsAndSelf";
import { anyone } from "../../access/anyone";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email"],
  },
  access: {
    read: adminsAndSelf,
    create: anyone,
    update: adminsAndSelf,
    delete: adminsAndSelf,
    admin: admins,
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "roles",
      label: "Roles",
      type: "select",
      hasMany: true,
      defaultValue: ["user"],
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
      access: {
        read: admins,
        create: admins,
        update: admins,
      },
    },
    {
      name: "photo",
      label: "Photo",
      type: "upload",
      relationTo: "media",
    }
  ],
  timestamps: true,
};

export default Users;
