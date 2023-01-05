import {Component} from "@angular/core";
import {BehaviorSubject} from 'rxjs';
import {MoviesSelectors} from "../../../selectors/movies.selectors";

@Component({
  selector: 'app-dashboard-list-winners',
  template: `
    <h4>List movie winners by year</h4>
    <div class="input-group mt-3">
      <input
        [(ngModel)]="year"
        (ngModelChange)="search.next($event)"
        type="number"
        class="form-control"
        placeholder="Search by year">
      <div class="input-group-append">
        <button class="btn btn-outline-primary" type="button" (click)="search.next(year)">Search</button>
      </div>
    </div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Id</th>
        <th>Year</th>
        <th>Title</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let item of (winners$ | async)">
        <td>{{item.id}}</td>
        <td>{{item.year}}</td>
        <td>{{item.title}}</td>
      </tr>
      </tbody>
    </table>
  `
})
export class DashboardListWinnersComponent extends MoviesSelectors {
  year = 0;
  search = new BehaviorSubject<number>(0);
  winners$ = this.winnersList$(this.search);
}
