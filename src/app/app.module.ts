import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieserviceService } from './shared/movieservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MovieComponent } from './components/movie/movie.component';;
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchDummyComponent } from './components/search-dummy/search-dummy.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './shared/data.service';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material';
 

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LogoComponent,
    SearchDummyComponent,
    AppRoutingComponent,
    WishlistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [MovieserviceService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
