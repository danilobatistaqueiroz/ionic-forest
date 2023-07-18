import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  hello:boolean=true;

  constructor() {}

  ngOnInit() {
    this.showAnimation();
  }

  showAnimation() {
    let root:HTMLElement|null = document.querySelector('#tips');
    root?.classList.add('forward');
  }
  hideAnimation() {
    let root:HTMLElement|null = document.querySelector('#tips');
    root?.classList.add('reverse');
  }

}
