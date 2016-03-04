import {MenuCategory} from "./menu_category"

export class MenuItem {
  menuItemId: number;
  menuCategoryId: MenuCategory;
  name: string;
  url: string;
  component: string;
}

