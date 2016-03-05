System.register(['angular2/core', 'angular2/router', '../model/menu_item', '../service/menu.service'], function(exports_1, context_1) {
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
    var core_1, router_1, menu_item_1, menu_service_1;
    var MenuItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (menu_item_1_1) {
                menu_item_1 = menu_item_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            }],
        execute: function() {
            MenuItemComponent = (function () {
                function MenuItemComponent(_router, _routeParams, _menuService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._menuService = _menuService;
                    this.model = new menu_item_1.MenuItem();
                }
                MenuItemComponent.prototype.getMenuCategories = function () {
                    var _this = this;
                    this._menuService.getMenuCategories().subscribe(function (data) { return _this.menuCats = data; }, function (error) { return _this.errorMessage = error; });
                };
                MenuItemComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    if (id > 0) {
                        this._menuService.getMenuItem(id).subscribe(function (item) { return _this.model = item; }, function (error) { return _this.errorMessage = error; });
                    }
                    this.getMenuCategories();
                };
                MenuItemComponent.prototype.cancel = function () {
                    this._router.navigate(['MenuListing']);
                };
                MenuItemComponent.prototype.save = function () {
                    var _this = this;
                    console.log(this.model);
                    console.log(JSON.stringify(this.model));
                    this._menuService.saveMenuItem(this.model).subscribe(function (data) { return _this.cancel(); }, function (error) { return _this.errorMessage = error; });
                };
                MenuItemComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-item',
                        templateUrl: 'app/menuItem/menu.item.template.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, menu_service_1.MenuService])
                ], MenuItemComponent);
                return MenuItemComponent;
            }());
            exports_1("MenuItemComponent", MenuItemComponent);
        }
    }
});
//# sourceMappingURL=menu.item.component.js.map