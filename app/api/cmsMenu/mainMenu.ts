import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { firstItem } from "~/schema/helpers";
import { menuGroup } from "~/schema/cmsGroups";

const responseShape = z
  .object({
    groups: z.array(menuGroup).transform(firstItem),
  })
  .transform((obj) => obj.groups);

export const getMainMenu = createQuery({
  path: "/cms_menu/main_menu",
  responseShape,
  withAuthToken: false,
});
