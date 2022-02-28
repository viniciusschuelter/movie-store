import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardModule } from "./dashboard.module";
import { DashboardComponent } from "./dashboard.component";

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    DashboardModule
  ]
})
export class DashboardRoutingModule { }
