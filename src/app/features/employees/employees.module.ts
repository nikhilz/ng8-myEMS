import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { AppCommonModule } from 'src/app/app.common.module';

import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header/header-breadcrumb/header-breadcrumb.module';


@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ]
})
export class EmployeesModule { }
