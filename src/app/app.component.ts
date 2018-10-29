import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieserviceService } from './shared/movieservice.service';
import { Observable } from 'rxjs';
import { OmdbMovie } from './omdbmovie';
import { DataService } from './shared/data.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies;
  omdbMovie ;
  omdbSearchTitle = '';
  constructor(private movieService: MovieserviceService,private dataService: DataService ) { }
  
  ngOnInit(){
    this.dataService.currentMovie1.subscribe(movieList=>this.omdbMovie=movieList);
  }




}
  
