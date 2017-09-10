import { Component, OnInit} from '@angular/core';
import {UserInfo} from './components/user/user.component';
import {LoginService} from './services/login/login.service';
import 'hammerjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'My Angular 2 Demo';
  login: boolean = false;
  token: string;
  private users: UserInfo[];

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
    this.start();
  }

  start() {
    this.token = this.loginService.token;
  }

  logout() {
    this.loginService.clear();
    localStorage.clear();
    this.token = this.loginService.token;
  }

}
