import { z } from "zod";

// While it has a similar structure to cms pages it is being rendered a bit different
// The structure is a bit more set in stone and we can make more assumptions about the data

export type MenuItemType = {
  id: number;
  name: string;
  url?: string;
  items?: MenuItem[];
};

const menuItem: z.ZodType<MenuItemType> = z.lazy(() =>
  z.object({
    id: z.number(),
    name: z.string(),
    items: z.array(menuItem).optional(),
    url: z.string().optional(),
  })
);

export type MenuItem = z.infer<typeof menuItem>;

export const menuItemListerGroup = z.object({
  id: z.number(),
  code: z.literal("menu-item-lister"),
  markdown_content: z.string().optional(),
  menu_items: z.array(menuItem).optional(),
  menu_items_tags: z.array(menuItem).optional(),
  menu_items_content: z.array(menuItem).optional(),
});

export type MenuItemListerGroup = z.infer<typeof menuItemListerGroup>;
