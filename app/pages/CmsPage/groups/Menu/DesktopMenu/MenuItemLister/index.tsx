import {
  MenuLink,
  MenuWrapper,
} from "~/pages/CmsPage/groups/Menu/DesktopMenu/MenuItemLister/styled";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { MenuItemListerGroup } from "~/schema/cmsMenu";
import { getAllMenuItems } from "~/containers/TopNav/hooks";

type Props = {
  data: MenuItemListerGroup;
};

export function MenuItemLister({ data }: Props) {
  return (
    <MenuWrapper>
      {data.markdown_content && (
        <MarkdownRenderer content={data.markdown_content} />
      )}
      {getAllMenuItems(data).length > 0 &&
        getAllMenuItems(data).map((item) => {
          if (item.url) {
            return (
              <MenuLink key={item.id} to={item.url}>
                {item.name}
              </MenuLink>
            );
          }

          return null;
        })}
    </MenuWrapper>
  );
}
