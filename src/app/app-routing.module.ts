import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ErrorComponent } from './shared/error/error.component';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('src/app/features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/features/register-user/register-user.module').then(m => m.RegisterUserModule)
  },
  {
    path: 'main',
    component: LayoutComponent,
    children: [{
      path: 'dashboard',
      loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
      canActivate: [AuthGuard]
    }, {
      path: 'aboutus',
      loadChildren: () => import('./features/aboutus/aboutus.module').then(m => m.AboutusModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'contactus',
      loadChildren: () => import('./features/contactus/contactus.module').then(m => m.ContactusModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'employees', loadChildren: () => import('./features/employees/employees.module').then(m => m.EmployeesModule),
      canActivate: [AuthGuard]
    }]
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
