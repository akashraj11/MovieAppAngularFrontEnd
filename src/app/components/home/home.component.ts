import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/shared/movieservice.service';
import { DataService } from 'src/app/shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies;
  omdbMovie ;
  omdbSearchTitle = '';
  constructor(private movieService: MovieserviceService,private dataService: DataService,private router: Router) { }
  movieModel = new Movie("", "", "", "",0, "");

  ngOnInit() {
    this.defaultLoad();
  }

  defaultLoad(){
    this.movieService.defaultLoad().subscribe(data => {
      this.omdbMovie = data['Search'];
      this.movies=null;
  });
}

selectMovie(id: string) {
  this.router.navigate(['/movie', id]);
}

}
