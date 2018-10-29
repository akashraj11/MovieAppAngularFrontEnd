import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MovieserviceService } from '../../shared/movieservice.service';
import { DataService } from '../../shared/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-dummy',
  templateUrl: './search-dummy.component.html',
  styleUrls: ['./search-dummy.component.css']
})
export class SearchDummyComponent implements OnInit {
  movies;
  omdbMovie;
  omdbSearchTitle = '';
  title = 'Search for Movies';
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private movieService: MovieserviceService,private dataService: DataService,private router: Router ) { }

  ngOnInit() {
    this.dataService.currentMovie.subscribe(movieList=>this.omdbMovie=movieList);
  }

  onSearch() {
    this.dataService.storeData(this.omdbSearchTitle);

  }

  selectMovie(id: string) {
    this.router.navigate(['/movie', id]);
  }
}
