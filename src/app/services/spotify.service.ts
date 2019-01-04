import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = "Bearer BQDrBrJB9VgPvvOF1SB9YeIq4q5F0aA6wmIIYNBgHmWWzipnWKd0WHgMxXF8JTt_RBB5HZtHaEfpBwnkQgE";

  constructor(
    private http: HttpClient
  ) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});

  }

  getArtists(termino:string){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get('https://api.spotify.com/v1/search?q='+termino+'&type=artist&limit=15',{headers});
  }

  getArtist(termino:string){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get('https://api.spotify.com/v1/artists/'+termino,{headers});
  }

  getTopTracks(artistaId:string){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get('https://api.spotify.com/v1/artists/'+artistaId+'/top-tracks?country=CO',{headers});
  }


}
