import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {BehaviorSubject, interval, Subscription} from "rxjs";
import {MovieInterface} from "../../models/movies.model";
import {debounce, map} from "rxjs/operators";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  subscriber: Subscription = new Subscription();
  movies: MovieInterface[] = [];
  page = 0;
  size = 15;
  totalPages = 0;
  totalElements = 0;

  year: number | undefined = undefined;
  searchByYear = new BehaviorSubject<number | null>(null);

  constructor(
    private MoviesService: MoviesService
  ) {

  }

  ngOnInit(): void {
    this.getMovies();
    this.subscribeByYear();
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  getMovies(winner?: boolean): void {
    this.subscriber.add(
      this.MoviesService.getMoviesPaginated(this.page, this.size, this.year, winner).subscribe(movies => {
        this.movies = movies.content;
        this.totalPages = movies.totalPages;
        this.totalElements = movies.totalElements;
      })
    )
  }

  subscribeByYear(): void {
    this.subscriber.add(
      this.searchByYear.pipe(
        debounce(() => interval(400)),
        map((year) => year))
        .subscribe(year => {
          this.getMovies();
        })
    )
  }
}
