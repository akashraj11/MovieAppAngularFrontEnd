import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from 'src/app/shared/movieservice.service';
import { DataService } from 'src/app/shared/data.service';
import { Movie } from 'src/app/movie';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  movies;
  omdbMovie ;
  omdbSearchTitle = '';
  constructor(private movieService: MovieserviceService,private dataService: DataService,private router : Router ) { }
  
  ngOnInit() {
  }

  onClick() {
    this.router.navigate["/wishlist"]
    this.omdbMovie=null;
  }

}
