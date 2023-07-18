import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreferencesService } from 'src/app/services/preferences.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent  implements OnInit {

  constructor(private router: Router, public preferences: PreferencesService) { }

  ngOnInit() {
    if(!this.preferences.isTutorial){
      this.router.navigate(['home']);
    }
    const swiperEl = document.querySelector('swiper-container');
    swiperEl?.addEventListener('slidechange', (event) => {
      if((event as any).detail[0].activeIndex==4){
        this.router.navigate(['tutorial/settings']);
      }
    });
  }

  first(){
    const swiper = (document.querySelector('swiper-container') as any).swiper;
    swiper.slideTo(0,800,false)
  }

}
