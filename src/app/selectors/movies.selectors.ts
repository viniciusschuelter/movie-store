import { MoviesService } from "../services/movies.service";
import { inject } from "@angular/core";
import {debounce, map, switchMap} from "rxjs/operators";
import {BehaviorSubject, interval} from "rxjs";

export class MoviesSelectors {

  private _moviesService = inject(MoviesService);

  intervalResult$ = this._moviesService.getMoviesInterval().pipe();
  multipleList$ = this._moviesService.getMoviesMultiple().pipe();
  topList$ = this._moviesService.getMoviesTop().pipe();
  winnersList$ = (search: BehaviorSubject<number>) => search.pipe(
    debounce(() => interval(400)),
    map((year) => year),
    switchMap((year) => this._moviesService.getMoviesWinners(year)
    )
  );
}
