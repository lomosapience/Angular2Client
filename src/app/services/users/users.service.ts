import { Injectable } from '@angular/core';
import {UserInfo} from '../../components/user/user.component';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  private headers = new Headers({'Content-Type': 'application/json'});
  usersUrl = 'http://localhost:4000/users';
  followUrl = 'http://localhost:4000/follow';
  constructor(private http: Http) { };

  getUsers(): Promise<any> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => JSON.parse(JSON.stringify(response)))
      .catch(this.handleError);
  };

  follow(obj): Promise<any> {
    return this.http.post(this.followUrl, JSON.stringify(obj), {headers: this.headers})
      .toPromise()
      .then(response => JSON.parse(JSON.stringify(response)))
      .catch(this.handleError);
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject('My error' || error.message || error);
  }
}
