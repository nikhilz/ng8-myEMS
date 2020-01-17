import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutusComponent } from './aboutus.component';
import { AppCommonModule } from 'src/app/app.common.module';


@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    AppCommonModule
  ]
})
export class AboutusModule { }
