import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS ,Router} from 'angular2/router';
import { MenuService } from '../service/menu.service';
import { MenuListingComponent } from '../menu/menu.listing.component';
import { MenuItemComponent } from '../menuItem/menu.item.component';
import { MenuCatComponent } from '../menuCategory/menu.cat.component';
import {HTTP_PROVIDERS}    from 'angular2/http';



@Component({
    selector: 'my-app',
    templateUrl: 'app/router/app.template.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
      HTTP_PROVIDERS,
      ROUTER_PROVIDERS,
      MenuService
    ]
})
@RouteConfig([
  {
    path: '/menulisting',
    name: 'MenuListing',
    component: MenuListingComponent,
    useAsDefault: true
  },
  {
    path: '/menuitem/:id',
    name: 'MenuItem',
    component: MenuItemComponent,
  },
  {
    path: '/menucat/:id',
    name: 'MenuCat',
    component: MenuCatComponent,
  }
])
export class AppComponent {
    constructor(
    private _router: Router) { }
    title = 'Quick Start App';
}