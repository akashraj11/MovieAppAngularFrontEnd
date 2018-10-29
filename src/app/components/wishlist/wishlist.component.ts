import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from 'src/app/shared/movieservice.service';
import { DataService } from 'src/app/shared/data.service';
import { Movie } from 'src/app/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  movies;
  omdbMovie ;
  omdbSearchTitle = '';
  constructor(private movieService: MovieserviceService,private dataService: DataService,private router: Router) { }
  movieModel = new Movie("", "", "", "",0, "");

  ngOnInit() {
    this.dataService.currentMovie.subscribe(movieList=>this.omdbMovie=movieList);
    this.movieService.getAllMovies().subscribe((data: Movie[]) => { this.movies = data });
  }

  onDelete(movie){
    this.movieService.deleteMovie(movie.imdbId);
    window.location.reload(true);
 
  }

  selectMovie(id: string) {
    this.router.navigate(['/movie', id]);
  }

  updateMovie(id:string,comment:string)
{
  console.log("updatee Mobie  in list");
  this.movieService.updateMovie(id,comment);
  window.location.reload(true);
}
}
