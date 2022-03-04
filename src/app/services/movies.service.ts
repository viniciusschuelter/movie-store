import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {
  MovieInterface,
  MovieIntervalResults,
  MovieMultipleYears,
  MovieMultipleYearsResults,
  MovieResults, MovieTopItem, MovieTopResults
} from "../models/movies.model";

@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  url = environment.apiBase;

  constructor(private http: HttpClient) {  }

  public getMoviesPaginated(page: number, size: number, year?: number, winner?: boolean): Observable<MovieResults> {
    const params = (year ? `&year=${year}` : '') + (winner !== undefined ? `&winner=${winner}` : '');
    return this.http
      .get<MovieResults>(`${this.url}?page=${page}&size=${size}${params}`)
      .pipe(
        map((data: any) => data),
        catchError(this.handleErrors)
      );
  }

  public getMoviesMultiple(): Observable<MovieMultipleYears[]> {
    return this.http
      .get<MovieMultipleYearsResults>(`${this.url}?projection=years-with-multiple-winners`)
      .pipe(
        map((data: any) => data.years),
        catchError(this.handleErrors)
      );
  }

  public getMoviesTop(): Observable<MovieTopItem[]> {
    return this.http
      .get<MovieTopResults>(`${this.url}?projection=studios-with-win-count`)
      .pipe(
        map((data: any) => data.studios.slice(0, 3)),
        catchError(this.handleErrors)
      );
  }

  public getMoviesInterval(): Observable<any> {
    return this.http
      .get<MovieIntervalResults>(`${this.url}?projection=max-min-win-interval-for-producers`)
      .pipe(
        map((data: MovieIntervalResults) => data),
        catchError(this.handleErrors)
      );
  }

  public getMoviesWinners(year: number): Observable<MovieInterface[]> {
    return this.http
      .get<MovieInterface[]>(`${this.url}?winner=true&year=${year}`)
      .pipe(
        map((data: any) => data),
        catchError(this.handleErrors)
      );
  }

  private handleErrors(error: HttpErrorResponse) {
    if (error) {
      return throwError(
        error.error?.message ? error.error?.message : error.message
      );
    } else {
      return throwError('Something wrong!');
    }
  }
}
