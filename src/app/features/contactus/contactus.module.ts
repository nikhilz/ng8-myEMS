import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './contactus.component';
import { ContactUsMailDialogComponent } from './contact-us-mail-dialog/contact-us-mail-dialog.component';
import { DialogService } from 'primeng';
import { AppCommonModule } from 'src/app/app.common.module';


@NgModule({
  declarations: [ContactusComponent, ContactUsMailDialogComponent],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    AppCommonModule
  ],
  entryComponents: [
    ContactUsMailDialogComponent
  ],
  providers : [DialogService]
})
export class ContactusModule { }
