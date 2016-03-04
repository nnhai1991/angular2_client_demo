System.register(['angular2/core', 'angular2/router', '../service/menu.service'], function(exports_1, context_1) {
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
    var core_1, router_1, menu_service_1;
    var MenuListingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            }],
        execute: function() {
            MenuListingComponent = (function () {
                //selectedHero: Hero;
                function MenuListingComponent(_router, _menuService) {
                    this._router = _router;
                    this._menuService = _menuService;
                    this.menuItems = {};
                }
                MenuListingComponent.prototype.getMenuCategories = function () {
                    var _this = this;
                    this._menuService.getMenuCategories()
                        .subscribe(function (data) { return _this.getMenuItems(data); }, function (error) { return _this.errorMessage = error; });
                };
                MenuListingComponent.prototype.getMenuItems = function (menuCats) {
                    var _this = this;
                    this.menuCats = menuCats;
                    menuCats.forEach(function (cat) {
                        _this._menuService.getMenuItemsByCat(cat.menuCategoryId)
                            .subscribe(function (data) { return _this.menuItems[cat.menuCategoryId] = data; }, function (error) { return _this.errorMessage = error; });
                    });
                };
                MenuListingComponent.prototype.addCat = function () {
                };
                MenuListingComponent.prototype.addItem = function () {
                    this._router.navigate(['MenuItem']);
                };
                MenuListingComponent.prototype.editItem = function (item) {
                };
                MenuListingComponent.prototype.deleteItem = function (item) {
                };
                MenuListingComponent.prototype.ngOnInit = function () {
                    this.getMenuCategories();
                };
                //onSelect(hero: Hero) { this.selectedHero = hero; }
                MenuListingComponent.prototype.gotoDetail = function () {
                    //this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
                };
                MenuListingComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-listing',
                        templateUrl: 'app/menu/menu.listing.template.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, menu_service_1.MenuService])
                ], MenuListingComponent);
                return MenuListingComponent;
            }());
            exports_1("MenuListingComponent", MenuListingComponent);
        }
    }
});
//# sourceMappingURL=menu.listing.component.js.map