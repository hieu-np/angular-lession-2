import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.class';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private _movieService: MovieService,
    public routerService: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('movie')) {
      // this.movies = this._movieService.getAllMovies();
      this.movies = JSON.parse(localStorage.getItem('movie') || '{}');
    } else {
      this.movies = this._movieService.getAllMovies();
    }
  }

  navigate(url: string){
    this.routerService.navigate([url])
    this.routerService.navigateByUrl(url)
  }

  title: string = 'Danh sách phim';
}
