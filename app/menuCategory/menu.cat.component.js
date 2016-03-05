System.register(['angular2/core', 'angular2/router', '../model/menu_category', '../service/menu.service'], function(exports_1, context_1) {
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
    var core_1, router_1, menu_category_1, menu_service_1;
    var MenuCatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (menu_category_1_1) {
                menu_category_1 = menu_category_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            }],
        execute: function() {
            MenuCatComponent = (function () {
                function MenuCatComponent(_router, _menuService) {
                    this._router = _router;
                    this._menuService = _menuService;
                    this.model = new menu_category_1.MenuCategory();
                }
                MenuCatComponent.prototype.ngOnInit = function () {
                };
                MenuCatComponent.prototype.cancel = function () {
                    this._router.navigate(['MenuListing']);
                };
                MenuCatComponent.prototype.save = function () {
                    var _this = this;
                    console.log(this.model);
                    console.log(JSON.stringify(this.model));
                    this._menuService.saveMenuCat(this.model).subscribe(function (data) { return _this.cancel(); }, function (error) { return _this.errorMessage = error; });
                };
                MenuCatComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-item',
                        templateUrl: 'app/menuItem/menu.item.template.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, menu_service_1.MenuService])
                ], MenuCatComponent);
                return MenuCatComponent;
            }());
            exports_1("MenuCatComponent", MenuCatComponent);
        }
    }
});
//# sourceMappingURL=menu.cat.component.js.map