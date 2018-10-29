export class OmdbMovie {
    constructor(
        public Title:string,
        public Year:string,
        public imdbID:string,
        public Type:string,
        public Poster:string
    ){}
}

export interface IMovie {
    Title: string;
    year: number;
    imdbID: string;
    runtime: string;
    genre: string;
    director: string;
    imdbRating: number;
    poster: string;
  }