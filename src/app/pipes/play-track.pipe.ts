import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Pipe({
  name: 'playTrack'
})
export class PlayTrackPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform( trackUrl: string): any {
    let url = "https://open.spotify.com/embed/track/"+trackUrl.split(":")[2];
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
