import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Config} from '../config/config.service';
import {Router} from '@angular/router';
import {Constants} from '../../constants';

const ENDPOINT = 'authentication';

@Injectable()
export class LoginService {

  private serverPath: string;
  private _token: string = null;

  constructor(private http: Http, private config: Config, private router: Router) {
    this.serverPath = this.config.serverBasePath + ENDPOINT;
  }

  login(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers, withCredentials: true});
      const body = JSON.stringify({username, password});
      this.http.post(this.serverPath, body, options).toPromise().then(resp => {
        this._token = resp.json()[0].token;
        localStorage.setItem(Constants.TOKEN_STORAGE, this._token);
        localStorage.setItem(Constants.USER_ID, resp.json()[0].user_id)
        resolve(resp.json()[0].status);
      }).catch(err => {
        reject(err);
      });
    });
  }

  get token(): string {
    if (!this._token) {
      this._token = localStorage.getItem(Constants.TOKEN_STORAGE);
    }
    if (!this._token && !this.router.url.startsWith('/login')) {
      this.router.navigate(['/login'], {queryParams: {origin: encodeURIComponent(this.router.url)}});
    }
    return this._token;
  }

  clear() {
    this._token = null;
  }

}
