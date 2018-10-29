import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OmdbMovie } from '../omdbmovie';
import { MovieserviceService } from './movieservice.service';
import { Movie } from '../movie';

@Injectable()
export class DataService {
  public omdbMovie:OmdbMovie[];
  public movies: Movie[];
  movieData=new BehaviorSubject<OmdbMovie[]>([]);
  currentMovie=this.movieData.asObservable();

  movieData1=new BehaviorSubject<Movie[]>([]);
  currentMovie1=this.movieData1.asObservable();

  constructor(private movieService:MovieserviceService) { }

  storeData(message: string) {
    this.movieService.getMovieOmdb(message).subscribe(data => {
        this.omdbMovie = data['Search'];
        this.movieData.next(this.omdbMovie);
        console.log("Movie data is ",this.omdbMovie)
      });
      this.movies=[];
  }
  }
