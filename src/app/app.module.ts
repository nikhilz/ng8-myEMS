import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppCommonModule } from './app.common.module';
import { MessageService } from 'primeng/api';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { MenuComponent } from './shared/layout/menu/menu.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ErrorComponent } from './shared/error/error.component';
import { UserIdleModule } from 'angular-user-idle';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppCommonModule,
    UserIdleModule.forRoot({ idle: 50, timeout: 1, ping: null })
  ],
  providers: [
    MessageService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
