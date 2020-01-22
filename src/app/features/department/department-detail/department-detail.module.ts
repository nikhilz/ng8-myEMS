import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentDetailRoutingModule } from './department-detail-routing.module';
import { DepartmentDetailComponent } from './department-detail.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header/header-breadcrumb/header-breadcrumb.module';


@NgModule({
  declarations: [DepartmentDetailComponent],
  imports: [
    CommonModule,
    DepartmentDetailRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ]
})
export class DepartmentDetailModule { }
