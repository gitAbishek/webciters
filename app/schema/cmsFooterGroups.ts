import { z } from "zod";
import {
  horizontalMenuGroup,
  logoListerGroup,
  markdownOnlyGroup,
  markdownOnlyGroupCentered,
  menuGroup,
  newsletterBlockGroup,
  serviceContactBlockGroup,
} from "~/schema/cmsGroups";

export const groups = z.array(
  z.discriminatedUnion("code", [
    newsletterBlockGroup,
    serviceContactBlockGroup,
    menuGroup,
    logoListerGroup,
    horizontalMenuGroup,
    markdownOnlyGroup,
    markdownOnlyGroupCentered,
  ])
);
