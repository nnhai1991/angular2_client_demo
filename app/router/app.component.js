System.register(['angular2/core', 'angular2/router', '../service/menu.service', '../menu/menu.listing.component', '../menuItem/menu.item.component', '../menuCategory/menu.cat.component', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, router_1, menu_service_1, menu_listing_component_1, menu_item_component_1, menu_cat_component_1, http_1;
    var AppComponent;
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
            },
            function (menu_listing_component_1_1) {
                menu_listing_component_1 = menu_listing_component_1_1;
            },
            function (menu_item_component_1_1) {
                menu_item_component_1 = menu_item_component_1_1;
            },
            function (menu_cat_component_1_1) {
                menu_cat_component_1 = menu_cat_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    this.title = 'Quick Start App';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/router/app.template.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS,
                            menu_service_1.MenuService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/menulisting',
                            name: 'MenuListing',
                            component: menu_listing_component_1.MenuListingComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/menuitem/:id',
                            name: 'MenuItem',
                            component: menu_item_component_1.MenuItemComponent,
                        },
                        {
                            path: '/menucat/:id',
                            name: 'MenuCat',
                            component: menu_cat_component_1.MenuCatComponent,
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map