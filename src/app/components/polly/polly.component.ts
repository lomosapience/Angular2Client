import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polly',
  templateUrl: './polly.component.html',
  styleUrls: ['./polly.component.css']
})
export class PollyComponent implements OnInit {

  audio = null;

  constructor() { }

  ngOnInit() {
  }

}
