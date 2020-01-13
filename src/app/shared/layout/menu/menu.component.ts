import { Component, OnInit } from '@angular/core';
import { CustomMenuItem } from 'src/app/core/models/menu-item.model';
import { ApplicationStateService } from 'src/app/core/services/application-state.service';
import { MenuDataService } from 'src/app/core/services/menu-data.service';
import { SessionService } from 'src/app/core/services/session.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: CustomMenuItem[];
  selectedItem: string;
  visible: boolean;
  constructor(private applicationStateService: ApplicationStateService,
    private menuDataService: MenuDataService,
    private sessionService: SessionService,
    private routeStateService: RouteStateService) { }

  ngOnInit() {

    var that = this;
    this.items = this.menuDataService.getMenuList();
    this.menuDataService.toggleMenuBar.subscribe(function (data:any){
      if(data && data!=null){
        that.visible = !that.visible;
      }
    });
  
  if (this.applicationStateService.getIsMobileResolution()) {
    this.visible = false;
} else {
    this.visible = true;
}

var activeMenu = this.sessionService.getItem("active-menu");
if (activeMenu) {
    this.selectedItem = activeMenu;
} else {
    this.selectedItem = "Home";
}
  }

ngOnDestroy() {
this.menuDataService.toggleMenuBar.observers.forEach(element => element.complete());
}

// on menu click event
onMenuClick(menu: CustomMenuItem) {
// if child are available then open child
if (menu.Childs != undefined || menu.Childs != null) {
    this.toggleSubMenu(menu);
    return;
}
if (menu.RouterLink == undefined || menu.RouterLink == null || menu.RouterLink == "") {
    this.routeStateService.add("Error 404", "/error", null, false);
    return;
}
this.selectedItem = menu.Label;
this.sessionService.setItem("active-menu", menu.Label);
this.routeStateService.add(menu.Label, menu.RouterLink, null, true);
// hide menu bar after menu click for mobile layout        
setTimeout(() => {
    if (this.applicationStateService.getIsMobileResolution()) {
        this.visible = false;
    }
}, 100);
}

// toggle sub menu on click
toggleSubMenu(menu: CustomMenuItem) {
menu.IsChildVisible = !menu.IsChildVisible;
}


}
