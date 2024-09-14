import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { groups } from "~/schema/cmsFooterGroups";

const responseShape = z.object({ groups });

export const getFooter = createQuery({
  path: "/cms_menu/footer",
  responseShape,
  withAuthToken: false,
});
