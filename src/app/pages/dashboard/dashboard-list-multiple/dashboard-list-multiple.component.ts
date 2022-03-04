import {Component} from "@angular/core";
import {MoviesService} from "../../../services/movies.service";


@Component({
  selector: 'app-dashboard-list-multiple',
  template: `
    <h4>List years with multiple winners</h4>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Year</th>
        <th>Win count</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let item of ($multipleList | async)">
        <td>{{item.year}}</td>
        <td>{{item.winnerCount}}</td>
      </tr>
      </tbody>
    </table>
  `
})
export class DashboardListMultipleComponent {

  $multipleList = this.moviesService.getMoviesMultiple();

  constructor(
    private moviesService: MoviesService
  ) { }
}
