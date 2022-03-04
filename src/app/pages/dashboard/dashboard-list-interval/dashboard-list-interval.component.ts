import {Component} from "@angular/core";
import {MoviesService} from "../../../services/movies.service";


@Component({
  selector: 'app-dashboard-list-interval',
  template: `
    <ng-container *ngIf="($intervalResult | async) as interval">
      <h4>Producers with longest shortest interval between wins</h4>
      <span>Max</span>
      <table class="table table-striped">
        <thead>
        <tr>
          <th>Producers</th>
          <th>Interval</th>
          <th>Previous year</th>
          <th>Following year</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of interval.max">
          <td>{{item.producer}}</td>
          <td>{{item.interval}}</td>
          <td>{{item.previousWin}}</td>
          <td>{{item.followingWin}}</td>
        </tr>
        </tbody>
      </table>

      <span>Min</span>
      <table class="table table-striped">
        <thead>
        <tr>
          <th>Producers</th>
          <th>Interval</th>
          <th>Previous year</th>
          <th>Following year</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of interval.min">
          <td>{{item.producer}}</td>
          <td>{{item.interval}}</td>
          <td>{{item.previousWin}}</td>
          <td>{{item.followingWin}}</td>
        </tr>
        </tbody>
      </table>
    </ng-container>
  `
})
export class DashboardListIntervalComponent {

  $intervalResult = this.moviesService.getMoviesInterval();

    constructor(
      private moviesService: MoviesService
    ) { }
}
