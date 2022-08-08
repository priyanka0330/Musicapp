import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.page.html',
  styleUrls: ['./mainscreen.page.scss'],
})
export class MainscreenPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  loginPage(){
    // eslint-disable-next-line no-trailing-spaces
    this.route.navigate(['login']);
   }

}