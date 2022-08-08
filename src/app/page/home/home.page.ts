import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  segment = 0;
  selectedSlide: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('slides', { static: false }) slider: IonSlides;

  constructor() { }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  options = {
    slidesPerView: 1.5,
    centered: true,
    spaceBetweenView:10
  // eslint-disable-next-line @typescript-eslint/semi
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  sliderOptions ={
  initialSlide: 0,
  slidesPerView: 1,
  speed:400
  // eslint-disable-next-line @typescript-eslint/semi
  }

  ngOnInit() {
  }
  async segmentChanged(event){
    console.log(this.segment);
    this.slider.slideTo(this.segment);
    //await this.selectedSlide.slideTo(this.segment);
    }
   // eslint-disable-next-line no-trailing-spaces

  async slidesChanged(slides: IonSlides) {
   this.selectedSlide = slides;
   slides.getActiveIndex().then( selectedIndex =>{
   this.segment = selectedIndex;
    });
  }
}

