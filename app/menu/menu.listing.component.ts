import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { MenuCategory } from '../model/menu_category';
import { MenuItem } from '../model/menu_item';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'menu-listing',
  templateUrl: 'app/menu/menu.listing.template.html',
  //styleUrls:  ['app/heroes.component.css'],
  //directives: [HeroDetailComponent]
})
export class MenuListingComponent implements OnInit {
  menuCats: MenuCategory[];
  menuItems: { [id: number] : MenuItem[]; } = {};
  
  errorMessage: string;
  //selectedHero: Hero;
  constructor(
    private _router: Router,
    private _menuService: MenuService) { }

  getMenuCategories() {
      this._menuService.getMenuCategories()
                     .subscribe(
                        data => this.menuCats  = data,
                       error =>  this.errorMessage = <any>error);
  }
//   getMenuItems(menuCats:MenuCategory[]) {
//       this.menuCats = menuCats;
//       menuCats.forEach(cat => {
//           this._menuService.getMenuItemsByCat(cat.menuCategoryId)
//                      .subscribe(
//                        data => this.menuItems[cat.menuCategoryId] = <MenuItem[]>data,
//                        error =>  this.errorMessage = <any>error);
//       });
//   }
  addCat(){
      this._router.navigate(['MenuCat',{ id:0}]);
  }
  
  editCat(cat: MenuCategory){
      this._router.navigate(['MenuCat',{ id:cat.menu_category_id }]);
  }
  deleteCat(cat: MenuCategory){
      if (cat.menu_item.length==0){
          this._menuService.deleteMenuCat(cat).subscribe(res=>this.getMenuCategories(), error =>  this.errorMessage = <any>error);
      }
  }
  
  
  addItem(){
      this._router.navigate(['MenuItem',{ id:0 }]);
  }
  editItem(item: MenuItem){
      this._router.navigate(['MenuItem',{ id:item.menu_item_id }]);
  }
  deleteItem(item: MenuItem){
      this._menuService.deleteMenuItem(item).subscribe(res=>this.getMenuCategories(), error =>  this.errorMessage = <any>error);
  }
  
  ngOnInit() {
    this.getMenuCategories();
  }

  //onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    //this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
