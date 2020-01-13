import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';


const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import('src/app/features/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'register',
    loadChildren: () => import('src/app/features/register-user/register-user.module').then(m=>m.RegisterUserModule)
  },
  {
    path: 'main',
    component: LayoutComponent,
    children : [{
      path: 'dashboard', 
      loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
    }]
  },
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
