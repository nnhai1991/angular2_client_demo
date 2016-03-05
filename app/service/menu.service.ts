import { Injectable } from 'angular2/core';
import {Http, Response,Headers, RequestOptions} from 'angular2/http';

import {Observable}     from 'rxjs/Observable';
import { MenuCategory } from '../model/menu_category';
import { MenuItem } from '../model/menu_item';



@Injectable()
export class MenuService {
    constructor(private http: Http) { }
    //private _menuCategoryUrl = 'http://localhost:8080/backend/rest/menucategory';  // URL to web api
    //private _menuItemUrl = 'http://localhost:8080/backend/rest/menuitem';  // URL to web api
    private _menuCategoryUrl = 'http://localhost:13183/api/menucategory';  // URL to web api
    private _menuItemUrl = 'http://localhost:13183/api/menuitem';  // URL to web api
    private options:RequestOptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    getMenuCategories() {
        return this.http.get(this._menuCategoryUrl)
            .map(res => <MenuCategory[]>res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }
    getMenuCategory(id: number) {
        return this.http.get(this._menuCategoryUrl + "get/" + id)
            .map(res => <MenuCategory>res.json())
            .catch(this.handleError);
    }
    getMenuItemsByCat(catId: number) {
        return this.http.get(this._menuCategoryUrl + "/" + catId + "/menuItems")
            .map(res => <MenuItem[]>res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }
    getMenuItem(id: number) {
        return this.http.get(this._menuItemUrl + "get/" + id)
            .map(res => <MenuItem>res.json())
            .catch(this.handleError);
    }

    saveMenuCat(cat: MenuCategory) {
        if (cat.menu_category_id == null)
            return this.http.post(this._menuCategoryUrl, JSON.stringify(cat),this.options)
                .map(res => res)
                .do(data => console.log(data))
                .catch(this.handleError);
        else
            return this.http.post(this._menuCategoryUrl+"/"+cat.menu_category_id, JSON.stringify(cat),this.options)
                .map(res => res)
                .do(data => console.log(data))
                .catch(this.handleError);
    }
    
    saveMenuItem(item: MenuItem) {
        if (item.menu_item_id == null)
            return this.http.post(this._menuItemUrl, JSON.stringify(item),this.options)
                .map(res => res)
                .do(data => console.log(data))
                .catch(this.handleError);
        else
            return this.http.post(this._menuItemUrl+"/"+item.menu_item_id, JSON.stringify(item),this.options)
                .map(res => res)
                .do(data => console.log(data))
                .catch(this.handleError);
    }
    
    deleteMenuCat(cat: MenuCategory) {
        return this.http.delete(this._menuCategoryUrl+"/"+cat.menu_category_id)
                .map(res => res)
                .do(data => console.log(data))
                .catch(this.handleError);
    }
    
    deleteMenuItem(item: MenuItem) {
        return this.http.delete(this._menuItemUrl+"/"+item.menu_item_id)
                .map(res => res)
                .do(data => console.log(data))
                .catch(this.handleError);
    }


    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json() || 'Server error');
    }
}
