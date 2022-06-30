import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.class';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-add-edit',
  templateUrl: './movie-add-edit.component.html',
  styleUrls: ['./movie-add-edit.component.css']
})
export class MovieAddEditComponent implements OnInit {
  title: string = 'Thêm phim';
  txtName: string = '';
  txtLink: string = '';
  txtAuthor: string = '';

  constructor(private _movieService : MovieService) { }

  ngOnInit(): void {
  }

  addMovie() {
    let movie = new Movie(0, this.txtName, this.txtLink, this.txtAuthor);
    this._movieService.addMovie(movie)
  }



}
