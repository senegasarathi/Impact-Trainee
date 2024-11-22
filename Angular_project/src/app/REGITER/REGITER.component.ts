import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-REGITER',
  templateUrl: './REGITER.component.html',
  styleUrls: ['./REGITER.component.css']
})
export class REGITERComponent implements OnInit {

  name:any="";
  mailid:any="";
  password:any="";
  cpassword:any="";
  showPassword: boolean = false;
  showConfirmPassword:boolean=false;
  constructor() { }


  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  ngOnInit() {
  }

}
