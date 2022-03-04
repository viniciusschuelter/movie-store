import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Subscription} from "rxjs";
import {MovieInterface} from "../../models/movies.model";

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

  constructor(
    private MoviesService: MoviesService
  ) {

  }

  ngOnInit(): void {
    this.getMovies();
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  getMovies(): void {
    this.subscriber.add(
      this.MoviesService.getMoviesPaginated(this.page, this.size).subscribe( movies => {
        this.movies = movies.content;
        this.totalPages = movies.totalPages;
        this.totalElements = movies.totalElements;
        console.log(movies);
      })
    )
  }
}
