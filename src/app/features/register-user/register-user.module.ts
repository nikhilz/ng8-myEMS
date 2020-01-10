import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user.component';
import { RegisterUserRoutingModule } from './register-user.routing';
import { AppCommonModule } from 'src/app/app.common.module';



@NgModule({
  declarations: [RegisterUserComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    RegisterUserRoutingModule
  ]
})
export class RegisterUserModule { }
