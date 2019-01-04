import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any = [];
  loading:boolean = true;

  constructor(
    private spotify: SpotifyService,
    private _router: Router
  )
  {
    this.spotify.getNewReleases().subscribe(
      (data:any) => {
        this.nuevasCanciones = data.albums.items;
        this.loading = false;
      },
      (error)=>{

      }
    );

  }

  ngOnInit() {

  }

  verArtista(item:any){

    let idArtist;

    switch(item.type){
      case "album": idArtist = item.artists[0].id; break;
      case "artist": console.log("artist"); break;
      default: console.log("-> ",item.type); break;
    }
    this._router.navigate(['/artista',idArtist]);

  }

}
