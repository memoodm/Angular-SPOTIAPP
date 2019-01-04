import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistasResultados:any[] = [];
  loading:boolean = false;

  constructor(
    private spotify: SpotifyService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  buscarArtista(artista:string){
    this.loading = true;
    this.spotify.getArtists(artista).subscribe( (data:any) => {
      this.artistasResultados = data.artists.items;
      this.loading = false;
    })
  }
  verArtista(artista:any){
    let idArtist = artista.id;
    this._router.navigate(['/artista',idArtist]);
  }

}
