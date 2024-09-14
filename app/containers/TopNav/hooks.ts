import { useRootData } from "~/root";
import { MenuItem, MenuItemListerGroup } from "~/schema/cmsMenu";

export function useTopNavData() {
  return useRootData().topNav;
}

export function getAllMenuItems(data: MenuItemListerGroup) {
  let allMenuItems: MenuItem[] = [];
  const menu_items: MenuItem[] = data.menu_items ? data.menu_items : [];
  const menu_items_tags: MenuItem[] = data.menu_items_tags
    ? data.menu_items_tags
    : [];
  const menu_items_content: MenuItem[] = data.menu_items_content
    ? data.menu_items_content
    : [];

  if (data.menu_items || data.menu_items_tags || data.menu_items_content) {
    allMenuItems = [...menu_items, ...menu_items_tags, ...menu_items_content];
  }

  return allMenuItems;
}
