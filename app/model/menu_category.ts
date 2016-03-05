import {MenuItem} from "./menu_item"
import {RestModel} from "./rest_model"

export class MenuCategory extends RestModel{
  menu_category_id: number;
  name: string;
  menu_item : MenuItem[];
}
