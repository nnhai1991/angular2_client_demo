System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var MenuService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            MenuService = (function () {
                function MenuService(http) {
                    this.http = http;
                    //private _menuCategoryUrl = 'http://localhost:8080/backend/rest/menucategory';  // URL to web api
                    //private _menuItemUrl = 'http://localhost:8080/backend/rest/menuitem';  // URL to web api
                    this._menuCategoryUrl = 'http://localhost:13183/api/menucategory'; // URL to web api
                    this._menuItemUrl = 'http://localhost:13183/api/menuitem'; // URL to web api
                    this.options = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': 'application/json' }) });
                }
                MenuService.prototype.getMenuCategories = function () {
                    return this.http.get(this._menuCategoryUrl)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                MenuService.prototype.getMenuCategory = function (id) {
                    return this.http.get(this._menuCategoryUrl + "get/" + id)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                MenuService.prototype.getMenuItemsByCat = function (catId) {
                    return this.http.get(this._menuCategoryUrl + "/" + catId + "/menuItems")
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                MenuService.prototype.getMenuItem = function (id) {
                    return this.http.get(this._menuItemUrl + "get/" + id)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                MenuService.prototype.saveMenuCat = function (cat) {
                    if (cat.menuCategoryId == null)
                        return this.http.post(this._menuCategoryUrl, JSON.stringify(cat), this.options)
                            .map(function (res) { return res.json(); })
                            .do(function (data) { return console.log(data); })
                            .catch(this.handleError);
                    else
                        return this.http.post(this._menuCategoryUrl + "/" + cat.menuCategoryId, JSON.stringify(cat), this.options)
                            .map(function (res) { return res.json(); })
                            .do(function (data) { return console.log(data); })
                            .catch(this.handleError);
                };
                MenuService.prototype.saveMenuItem = function (item) {
                    if (item.menuItemId == null)
                        return this.http.post(this._menuItemUrl, JSON.stringify(item), this.options)
                            .map(function (res) { return res.json(); })
                            .do(function (data) { return console.log(data); })
                            .catch(this.handleError);
                    else
                        return this.http.post(this._menuItemUrl + "/" + item.menuItemId, JSON.stringify(item), this.options)
                            .map(function (res) { return res.json(); })
                            .do(function (data) { return console.log(data); })
                            .catch(this.handleError);
                };
                MenuService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                MenuService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MenuService);
                return MenuService;
            }());
            exports_1("MenuService", MenuService);
        }
    }
});
//# sourceMappingURL=menu.service.js.map