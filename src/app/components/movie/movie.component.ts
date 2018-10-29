
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MovieserviceService } from 'src/app/shared/movieservice.service';
import { OmdbMovie, IMovie } from 'src/app/omdbmovie';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: string;
  favorite: boolean;
  private sub: any;
  movies;
  omdbMovie ;
  omdbSearchTitle = '';
  movieModel = new Movie("", "", "", "",0, "");

  movie: IMovie={
    Title: "Default",
    year: 2018,
    imdbID: "default_id",
    runtime: "20:45",
    genre: "Mystery",
    director: "default_director",
    imdbRating: 7,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rSMjKnyG6tXdIhsw2OAYlj56Xc5ncsda_PWTtXAoPUuU4iw0"
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieserviceService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.movieService.getMovie(this.id).subscribe((data)=>
    {
      this.movie.Title=data["Title"];
      this.movie.year=data["Year"];
      this.movie.imdbID=data["imdbID"];
      this.movie.runtime=data["Runtime"];
      this.movie.genre=data["Genre"];
      this.movie.director=data["Director"];
      this.movie.imdbRating=data["imdbRating"];
      this.movie.poster=data["Poster"];
      // console.log(data);
      console.log(this.movie.poster);
  });
  
}



onSubmit(omdbMovie:IMovie,commentip: string,ratingip:number) {
  this.movieModel.movieTitle=omdbMovie.Title;
  this.movieModel.yearOfRelease= String(omdbMovie.year);
  this.movieModel.imdbId=omdbMovie.imdbID;
  this.movieModel.posterUrl=omdbMovie.poster;
  this.movieModel.rating=ratingip;
  this.movieModel.comment=commentip;
  this.movieService.saveMovie(this.movieModel).subscribe(res => console.log('Saved'));
}



}
