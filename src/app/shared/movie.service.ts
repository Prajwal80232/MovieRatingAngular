import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  formData : Movie
  list: Movie[];
  readonly rootURL = 'http://localhost:61892/api';
  
  constructor(private http : HttpClient) { }

  postMovie(formData: Movie) {
    return this.http.post(this.rootURL + '/Movies', formData);
  }
  refreshList() {
    this.http.get(this.rootURL + '/Movies')
      .toPromise().then(res => this.list = res as Movie[]);
  }

  putMovie(formData: Movie) {
    return this.http.put(this.rootURL + '/Movies/' + formData.movieId, formData);

  }

  deleteMovie(id: number) {
    return this.http.delete(this.rootURL + '/Movies/' + id);
  }
}
