import {Component} from "@angular/core";
import {MoviesService} from "../../../services/movies.service";


@Component({
  selector: 'app-dashboard-list-top',
  template: `
    <h4>Top 3 studios with winners</h4>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Win count</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let item of ($topList | async)">
        <td>{{item.name}}</td>
        <td>{{item.winCount}}</td>
      </tr>
      </tbody>
    </table>
  `
})
export class DashboardListTopComponent {

  $topList = this.moviesService.getMoviesTop();

  constructor(
    private moviesService: MoviesService
  ) { }
}
