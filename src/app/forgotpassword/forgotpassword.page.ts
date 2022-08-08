import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  loginPage(){
    // eslint-disable-next-line no-trailing-spaces
    this.route.navigate(['login']);
   }
}
