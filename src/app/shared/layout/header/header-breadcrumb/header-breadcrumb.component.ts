import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-breadcrumb',
  templateUrl: 'header-breadcrumb.component.html',
  styleUrls: ['header-breadcrumb.component.css']
})
export class HeaderBreadcrumbComponent implements OnInit {

  items: MenuItem[];

  home: MenuItem;


  constructor(private routeStateService: RouteStateService,
    private router: Router) {
    this.items = [];
  }

  ngOnInit() {
    var routes = this.routeStateService.getAll();
    routes.forEach(route => {
      this.items.push({ label: route.title, command: () => { this.onClickBreadcrumb(route.id); } });
    });

    this.home = { icon: 'pi pi-home' ,command: () => { this.redirectToHome()} };
  }

  onClickBreadcrumb(id: number) {
    this.routeStateService.loadById(id);
  }

  redirectToHome(){
    this.router.navigate(["main/dashboard"]);
  }
}
