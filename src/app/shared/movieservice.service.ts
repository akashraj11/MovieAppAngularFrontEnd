import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../movie";
import { environment as env } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class MovieserviceService {
  private _url: string = "https://localhost:8443/api/v1/movie";
  private _url1: string = "https://localhost:8443/api/v1/saveMovie";
  private omdbUrl: string = "http://www.omdbapi.com/?s=";
  private omdbUrl2: string = "http://www.omdbapi.com/?i=";
  private apiKey: string = "&apikey=6db283eb";
  private _url2: string = "https://localhost:8443/api/v1/movie/";
  private _url3:string = "http://www.omdbapi.com/?s=batman&apikey=6db283eb";
  constructor(private http: HttpClient) {}

  saveMovie(movie: Movie): Observable<Movie> {
    //let headers = new Headers({ "Content-Type": "application/json" });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post<Movie>(this._url, movie);
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this._url);
  }

  getMovieOmdb(title: string) {
    let url = `${this.omdbUrl}${title}${this.apiKey}`;
    return this.http.get(url);
  }

  getMovie(id:string) {
    console.log("search in service");
    console.log(id);
    let preomdburl = "http://www.omdbapi.com/?i=";
    let postomdburl = "&type=movie&apikey=2cc7c887"
    const geturl = `${preomdburl}${id}${postomdburl}`;
    this.http.get(geturl).subscribe(
      data => {
        console.log("get Request is successful ", data);
      },
      error => {
        console.log("Error", error);
        window.alert(error["error"]);
      });
    return this.http.get(geturl);
  }

  deleteMovie(id) {
    return this.http.delete(this._url2 + id).subscribe(
      data => {
          console.log("DeleteRequest is successful ", data);
          window.alert("Successfully Deleted");
      },
      error => {
          console.log("Error", error);
          window.alert(error["error"]);
      });
  }


  updateMovie(id:string,comment:string)
  {
    console.log("update in service");
    console.log(id);
    const updateurl=`${this._url}/${id}`;
    this.http.put(updateurl,comment).subscribe(
      data => {
          console.log("POST Request is successful ", data);
          window.alert("Successfully Updated");
      },
      error => {
          console.log("Error", error);
          window.alert(error["error"]);
      });
  }

  defaultLoad(){
    return this.http.get(env.api);
  }

  
}
