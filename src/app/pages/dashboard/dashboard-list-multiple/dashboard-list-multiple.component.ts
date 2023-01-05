import {Component} from "@angular/core";
import {MoviesSelectors} from "../../../selectors/movies.selectors";


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
      <tr *ngFor="let item of (multipleList$ | async)">
        <td>{{item.year}}</td>
        <td>{{item.winnerCount}}</td>
      </tr>
      </tbody>
    </table>
  `
})
export class DashboardListMultipleComponent extends MoviesSelectors { }
