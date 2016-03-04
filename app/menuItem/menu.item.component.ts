import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {NgForm}    from 'angular2/common';

import { MenuCategory } from '../model/menu_category';
import { MenuItem } from '../model/menu_item';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'menu-item',
  templateUrl: 'app/menuItem/menu.item.template.html',

})
export class MenuItemComponent implements OnInit {
  menuCats: MenuCategory[];
  errorMessage:any;
  model :MenuItem = new MenuItem();


  constructor(
    private _router: Router,
    private _menuService: MenuService) { }

  getMenuCategories() {
      this._menuService.getMenuCategories().subscribe(data => this.menuCats = data,error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getMenuCategories();
      this.model.menuCategoryId = new MenuCategory();
  }

  cancel(){
      this._router.navigate(['MenuListing']);
  }
  save(){
       console.log(this.model);
      console.log(JSON.stringify(this.model));
      this._menuService.saveMenuItem(this.model).subscribe(data=>this.cancel(),error=>this.errorMessage=<any>error);
  }
}
