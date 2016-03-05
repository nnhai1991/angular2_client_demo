import { Component, OnInit } from 'angular2/core';
import { Router,RouteParams } from 'angular2/router';
import {NgForm}    from 'angular2/common';

import { MenuCategory } from '../model/menu_category';
import { MenuItem } from '../model/menu_item';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'menu-item',
  templateUrl: 'app/menuCategory/menu.cat.template.html',

})
export class MenuCatComponent implements OnInit {
  errorMessage:any;
  model :MenuCategory = new MenuCategory();


  constructor(
    private _router: Router,
    private _routeParams : RouteParams,
    private _menuService: MenuService) { }

  ngOnInit() {
      let id = +this._routeParams.get('id');
      if (id > 0) {
            this._menuService.getMenuCategory(id).subscribe(item => this.model=item,error=>this.errorMessage=<any>error);
        }
  }

  cancel(){
      this._router.navigate(['MenuListing']);
  }
  save(){
      console.log(this.model);
      console.log(JSON.stringify(this.model));
      this._menuService.saveMenuCat(this.model).subscribe(data=>this.cancel(),error=>this.errorMessage=<any>error);
  }
}
