import {MenuCategory} from "./menu_category"
import {RestModel} from "./rest_model"

export class MenuItem extends RestModel {
  menu_item_id: number;
  menu_category_id: number;
  menu_category: MenuCategory;
  name: string;
  url: string;
  component: string;
}

