import { MenuGroup } from "~/schema/cmsGroups";
import { GridRow } from "~/pages/CmsPage/groups/Menu/styled";
import { DesktopMenu } from "~/pages/CmsPage/groups/Menu/DesktopMenu";
import { MobileMenu } from "~/pages/CmsPage/groups/Menu/MobileMenu";

type Props = {
  data: MenuGroup;
};

export function Menu({ data }: Props) {
  return (
    <GridRow>
      <DesktopMenu menus={data.elements} />
      <MobileMenu menus={data.elements} />
    </GridRow>
  );
}
