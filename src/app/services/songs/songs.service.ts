import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SongsService {

  private url = 'https://api.myjson.com/bins/cr1th';
  private songs;

  constructor(private http: Http) {
  }

  getSongs() {
    return this.http.get(this.url)
      .map(res => res.json())
      .subscribe(res => console.log(res));
  }
}
