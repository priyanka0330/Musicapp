import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  constructor(private router:Router) { }

  ngOnInit() {
  }
  signUPUser(){
    this.router.navigate(['login']);
     }
}
