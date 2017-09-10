import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-song-list',
  template: `<ul>
                <li *ngFor="let song of songs; index as j" (click)="selectSong.emit(song)">
                  <pre>{{ j }} . {{ song.title }}</pre>
                </li>
             </ul>
  `,
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  @Input() songs;
  @Output() selectSong = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
