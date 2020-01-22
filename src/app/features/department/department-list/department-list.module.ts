import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentListRoutingModule } from './department-list-routing.module';
import { DepartmentListComponent } from './department-list.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header/header-breadcrumb/header-breadcrumb.module';


@NgModule({
  declarations: [DepartmentListComponent],
  imports: [
    CommonModule,
    DepartmentListRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ]
})
export class DepartmentListModule { }
