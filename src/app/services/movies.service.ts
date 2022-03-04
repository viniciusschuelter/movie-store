import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {MovieInterface, MovieResults} from "../models/movies.model";

@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  url = environment.apiBase;

  constructor(private http: HttpClient) {  }

  public getMoviesPaginated(page: number, size: number, year?: number, winner?: boolean): Observable<any> {
    const params = (year ? `&year=${year}` : '') + (winner ? `&winner=${winner}` : '');
    return this.http
      .get<MovieResults>(`${this.url}?page=${page}&size=${size}${params}`)
      .pipe(
        map((data: any) => data),
        catchError(this.handleErrors)
      );
  }

  public getPokemonByUrl(url: string): Observable<any> {
    return this.http.get<MovieInterface>(url).pipe(
      map(data => data),
      catchError(this.handleErrors)
    );
  }


  public getPokemonByHabitat(habitat?: string): Observable<any> {
    return this.http.get<any>(this.url + 'pokemon-habitat/' + (habitat ? habitat : '')).pipe(
      map(data => data?.pokemon_species ? data.pokemon_species : data.results),
      catchError(this.handleErrors)
    );
  }

  public getPokemonByLazyLoading(limit: number, skip: number): Observable<any> {
    return this.http
      .get<MovieInterface[]>(this.url + `pokemon?limit=${limit}&offset=${skip}`)
      .pipe(
        map((data: any) => data.results),
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
