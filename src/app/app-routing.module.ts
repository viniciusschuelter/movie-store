import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";


const routes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list-routing.module').then(m => m.ListRoutingModule)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) export class AppRoutingModule { }
