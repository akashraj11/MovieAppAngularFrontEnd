export class Movie {
    constructor(
        public imdbId: string,
        public movieTitle: string,
        public yearOfRelease: string,
        public comment:string,
        public rating:number,
        public posterUrl:string,
    ){}
}
 