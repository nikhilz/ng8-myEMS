import { NgModule } from '@angular/core';

import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadcrumbComponent } from './header-breadcrumb.component';

@NgModule({
  imports: [
    AppCommonModule
  ],
  declarations: [
    HeaderBreadcrumbComponent,
  ],
  exports: [
    HeaderBreadcrumbComponent
  ]
})
export class HeaderBreadCrumbModule { }