import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {SongListComponent} from './song-list/song-list.component';
import {SongsService} from '../../services/songs/songs.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainComponent,
    SongListComponent
  ],
  exports: [
    MainComponent
  ],
  providers: [
    SongsService
  ]
})
export class MainModule { }
