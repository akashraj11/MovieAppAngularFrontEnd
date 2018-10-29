import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from 'src/app/shared/movieservice.service';
import { DataService } from 'src/app/shared/data.service';
import { OmdbMovie } from 'src/app/omdbmovie';
import { Movie } from 'src/app/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movies;
  omdbMovie ;
  omdbSearchTitle = '';
  constructor(private movieService: MovieserviceService,private dataService: DataService,private router:Router) { }
  movieModel = new Movie("", "", "", "",0, "");

  ngOnInit() {

    this.dataService.currentMovie.subscribe(movieList=>this.omdbMovie=movieList);
  }

  selectMovie(id: string) {
    this.router.navigate(['/movie', id]);
  }

}
