import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { AnimationController, ModalController } from '@ionic/angular';
import { TermsComponent } from '../terms/terms.component';
import { mdEnterAnimation, mdLeaveAnimation } from '../terms/animation/enter';
import { Animations } from '../terms/animation/animations';

register();

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  @ViewChild('modalcompartilhamento') modalCompartilhamento!: ElementRef;

  constructor(private modalCtrl: ModalController, private animationCtrl: AnimationController) { }

  ngOnInit() {
    let img = document.querySelector('.main img');
    setTimeout(() => (img as any).src = "assets/tutorial/settings1.png", 1000);
    setTimeout(() => (img as any).src = "assets/tutorial/settings2.png", 2000);
    setTimeout(() => {
      (img as any).src = "assets/tutorial/settings3.png";
      this.showAnimation1();
    }, 3000);
  }

  showAnimation1() {
    let root: HTMLElement | null = document.querySelector('.floating1');
    root?.classList.add('forward');
  }
  hideAnimation1() {
    let root: HTMLElement | null = document.querySelector('.floating1');
    root?.classList.add('reverse');
    let img = document.querySelector('.main img');
    (img as any).src = "assets/tutorial/settings4.png";
    setTimeout(() => this.showAnimation2(), 800);
  }
  showAnimation2() {
    let root: HTMLElement | null = document.querySelector('.floating2');
    root?.classList.add('forward');
  }
  hideAnimation2() {
    let root: HTMLElement | null = document.querySelector('.floating2');
    root?.classList.add('reverse');
    let img = document.querySelector('.main img');
    (img as any).src = "assets/tutorial/settings5.png";
    setTimeout(() => this.showAnimation3(), 800);
  }
  showAnimation3() {
    let root: HTMLElement | null = document.querySelector('.floating3');
    root?.classList.add('forward');
  }
  hideAnimation3() {
    let animations = new Animations(this.animationCtrl);
    let root: HTMLElement | null = document.querySelector('.floating3');
    root?.classList.add('reverse');
    setTimeout(()=>{
      //exemplo usando AnimationsController
      //this.modalCtrl.create({component:TermsComponent,enterAnimation:animations.enterAnimation,leaveAnimation:animations.leaveAnimation})
      this.modalCtrl.create({component:TermsComponent,enterAnimation:mdEnterAnimation,leaveAnimation:mdLeaveAnimation})
      .then(async (modal) => {
        modal.present();
        const { role } = await modal.onWillDismiss();
        if(role === 'confirm'){
          let img = document.querySelector('.main img');
          (img as any).src = "assets/tutorial/settings2.png";
        }
      });
    },1000);
  }

}
