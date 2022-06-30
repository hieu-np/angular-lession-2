import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.class';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movies: Movie[] = [
    new Movie(1, 'Tiệc trăng máu', 'https://www.youtube.com/watch?v=nh0BklwPN9Q&t=24s&ab_channel=BHDStarCineplex', 'Nguyễn Quang Dũng'),
    new Movie(2, 'Lật mặt 5: 48h', 'https://www.youtube.com/watch?v=kBY2k3G6LsM&ab_channel=LyHaiProduction', 'Lý Hải'),
    new Movie(3, 'Stand By Me 2', 'https://www.youtube.com/watch?v=AgmWfzlOvqw&ab_channel=CGVCinemasVietnam', 'Fujiko F. Fujio'),
    new Movie(4, 'Chị chị em em', 'https://www.youtube.com/watch?v=gv8fwd7ga00&ab_channel=GalaxyCinema%28Official%29','Vũ Ngọc Đãng')

  ];

  constructor() { }

  getAllMovies(){
    return this.movies;
  }

  addMovie(movie: Movie){
    movie.id = this.getLastId(this.movies);
    this.movies.push(movie);
    localStorage.setItem('movie', JSON.stringify(this.movies))
  }

  getLastId(movies: Movie[]){
    // sắp xếp id
    let lasIid = movies.length;
    if(lasIid>0){
      lasIid = movies.sort((a: Movie, b: Movie) => {
        if(a.id > b.id) return -1;
        else if(a.id < b.id) return 1;
        else return 0;
      })[0].id + 1;
    }else{
      lasIid = 1;
    }
    console.log(movies);
    
    return lasIid;
  }
}
