import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container-fluid px-4">
      <div class="row ">
        <div class="col-12 col-lg-6 g-5">
          <app-dashboard-list-multiple></app-dashboard-list-multiple>
        </div>
        <div class="col-12 col-lg-6 g-5">
          <app-dashboard-list-top></app-dashboard-list-top>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 g-5">
          <app-dashboard-list-interval></app-dashboard-list-interval>
        </div>
        <div class="col-12 col-lg-6 g-5">
          <app-dashboard-list-winners></app-dashboard-list-winners>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent  { }
