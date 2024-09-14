import { z } from "zod";
import { createQuery } from "~/api/utils.server";
import { uspFaderGroup } from "~/schema/cmsElements";
import { firstItemOrNull } from "~/schema/helpers";

const responseShape = z
  .object({
    groups: z.array(uspFaderGroup).transform(firstItemOrNull),
  })
  .transform((obj) => obj?.groups?.elements || []);

export const getUspFader = createQuery({
  path: "/cms_menu/usp_fader",
  responseShape,
  withAuthToken: false,
});
