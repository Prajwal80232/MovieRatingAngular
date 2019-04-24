import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/movie.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private service : MovieService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      movieId: null,
      movieName: '',
      genres: '',
      Rating: null
    }
  }

  onSubmit(form: NgForm) {
     if (form.value.movieId == null)
      this.insertRecord(form);
     else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postMovie(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Movie Rating Done!!');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putMovie(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Movie Rating Done!!');
      this.resetForm(form);
      this.service.refreshList();
    });

  }


  }


