import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/index';
import { DashboardComponent } from './components/Dashboard/dashboard.component';
import { ManageSupplier } from './components/common/sidebar/sidebarComponent/ManageSupplier/manageSupplier.component';


const app_Routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path :'manageSupplier', component: ManageSupplier }
    ]
  },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(app_Routes);