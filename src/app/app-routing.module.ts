import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

 