import type { Access } from "payload/config";

import { checkRole } from "../collections/Users/checkRole";

export const adminsAndSelf: Access = ({ req: { user } }) => {
  if (user) {
    if (checkRole(["admin"], user)) {
      return true;
    }

    return {
      id: user.id,
    };
  }

  return false;
};
