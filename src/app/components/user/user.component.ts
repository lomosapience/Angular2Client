import { Component, OnInit } from '@angular/core';

export class UserInfo {
  id: number;
  name: String;
  groupname: String;
  follow: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
