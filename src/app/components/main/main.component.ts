import { Component, OnInit } from '@angular/core';
import {SongsService} from '../../services/songs/songs.service';

@Component({
  selector: 'app-main',
  template: `
    <p>
      Main
    </p>
    <app-song-list [songs]="songs | async" (selectSong)="displaySong($event)"></app-song-list>
    <p [style.background]="bgColor">
      {{ displayedSong.lyrics }}
    </p>
  `,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  bgColor = 'black';
  displayedSong = '';

  // $ tells us that Observable
  songs$;

  constructor(private songsService: SongsService) {

  }

  ngOnInit() {
    this.songs$ = this.songsService.getSongs();
  }

  displaySong(chosenSong) {
    this.displayedSong = chosenSong;
    this.bgColor = chosenSong.bgColor;
  }
}
