import { Link } from "@remix-run/react";
import { MenuItemListerGroup } from "~/schema/cmsMenu";
import { Stack } from "~/components/Stack";
import { ToggleExpand } from "~/components/ToggleExpandMenus";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { getAllMenuItems } from "~/containers/TopNav/hooks";

type Props = {
  data: MenuItemListerGroup;
  toggleHandler: (id: number) => void;
  activeMenuId: number | null;
};

export function MenuItemLister({ data, activeMenuId, toggleHandler }: Props) {
  return (
    <Stack gap={2} direction="column">
      <ToggleExpand
        isActive={activeMenuId === data.id}
        title={
          data.markdown_content && (
            <div>
              <MarkdownRenderer content={data.markdown_content} />
            </div>
          )
        }
        onClick={() => toggleHandler(data.id)}
      >
        <Stack spacing={4} direction="column">
          {getAllMenuItems(data).length > 0 &&
            getAllMenuItems(data).map(
              (menuItem) =>
                menuItem.url && (
                  <Link key={menuItem.id} to={menuItem.url}>
                    {menuItem.name}
                  </Link>
                )
            )}
        </Stack>
      </ToggleExpand>
      <hr />
    </Stack>
  );
}
