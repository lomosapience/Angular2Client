import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import {UserInfo} from '../user/user.component';
import {Constants} from '../../constants';
import {LoginService} from '../../services/login/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: UserInfo[];

  constructor(private usersService: UsersService, private loginService: LoginService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().then(users => {
      this.users = JSON.parse(users._body);
    });
  }

  follow(id) {
    const followObj = {id_user: localStorage.getItem(Constants.USER_ID), id_followed: id}
    this.usersService.follow(followObj).then(users => {
      this.users = JSON.parse(users._body);
    });
  }
}
