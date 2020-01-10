import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login.routing';
import { LoginComponent } from './login.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        AppCommonModule
    ],
    exports: [],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }
