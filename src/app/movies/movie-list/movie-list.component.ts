import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/movie.service';
import { ToastrService } from 'ngx-toastr';
import { Movie } from 'src/app/shared/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private service: MovieService,private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(movie: Movie) {
    this.service.formData = Object.assign({}, movie);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteMovie(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'Movie Rating Deleted');
      });
    }
  }

}
