import { Component } from "@angular/core";
import { MoviesSelectors } from "../../../selectors/movies.selectors";
import { tableIntervalList } from "../../../models/movies.model";

@Component({
  selector: 'app-dashboard-list-interval',
  template: `
    <ng-container *ngIf="(intervalResult$ | async) as interval">
      <h4>Producers with longest shortest interval between wins</h4>
      <span>Max</span>
      <table class="table table-striped">
        <thead>
        <tr>
          <th *ngFor="let th of tableIntervalList">{{ th.header }}</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of interval.max">
          <td *ngFor="let td of tableIntervalList">{{ item[td.prop] }}</td>
        </tr>
        </tbody>
      </table>

      <span>Min</span>
      <table class="table table-striped">
        <thead>
        <tr>
          <th *ngFor="let th of tableIntervalList">{{ th.header }}</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of interval.min">
          <td *ngFor="let td of tableIntervalList">{{ item[td.prop] }}</td>
        </tr>
        </tbody>
      </table>
    </ng-container>
  `
})
export class DashboardListIntervalComponent extends MoviesSelectors {
  tableIntervalList = tableIntervalList;
}
