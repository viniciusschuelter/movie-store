import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { DashboardListIntervalComponent } from "./dashboard-list-interval/dashboard-list-interval.component";
import { DashboardListMultipleComponent } from "./dashboard-list-multiple/dashboard-list-multiple.component";
import { DashboardListTopComponent } from "./dashboard-list-top/dashboard-list-top.component";
import { DashboardListWinnersComponent } from "./dashboard-list-winners/dashboard-list-winners.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardListIntervalComponent,
    DashboardListMultipleComponent,
    DashboardListTopComponent,
    DashboardListWinnersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DashboardModule { }
