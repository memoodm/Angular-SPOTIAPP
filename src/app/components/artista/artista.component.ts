import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artistaItem:any = {};
  topTracksItem:any[] = [];
  loadingArtista:boolean = true;
  loadingTracks:boolean = true;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _spotityService:SpotifyService,
    private _router:Router
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      let idArtista:string = params['idArtista'];
        this.obtenerArtista(idArtista);
        this.obtenerTopTracks(idArtista);
    });
  }

  obtenerArtista(idArtista:string){
    this._spotityService.getArtist(idArtista).subscribe(
      (data:any) => {
        this.artistaItem = data;
        console.log(this.artistaItem);
        this.loadingArtista = false;
      }
    );
  }
  obtenerTopTracks(idArtista:string){
    this._spotityService.getTopTracks(idArtista).subscribe(
      (data:any)=>{
        this.topTracksItem = data.tracks;
        console.log(this.topTracksItem);
        this.loadingTracks = false;
      }
    );
  }

  goHome(){
    this._router.navigate(['/home']);
  }

}
