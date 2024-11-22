import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-LOGIN',
  templateUrl: './LOGIN.component.html',
  styleUrls: ['./LOGIN.component.css']
})
export class LOGINComponent implements OnInit {

  username:any="";
  password:any="";

  constructor() { }

  ngOnInit() {
  }

}
