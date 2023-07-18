import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalController, ModalOptions } from '@ionic/angular';
import { TermsComponent } from '../terms/terms.component';
import { mdEnterAnimation } from '../terms/animation/enter';

register();

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  @ViewChild('modalcompartilhamento') modalCompartilhamento!: ElementRef;
  
  closeResult = '';

  constructor(private router: Router, private modalCtrl: ModalController, private modalService: NgbModal) { }

  ngOnInit() {
    let img = document.querySelector('.main img');
/*
para usar a modal do ng-bootstrap remova os comentarios e no ultimo slide a modal sera chamada
    setTimeout(() => (img as any).src = "assets/tutorial/settings1.png", 1000);
    setTimeout(() => (img as any).src = "assets/tutorial/settings2.png", 2000);
    setTimeout(() => {
      (img as any).src = "assets/tutorial/settings3.png";
      this.showAnimation1();
    }, 3000);
*/
    setTimeout(()=> {
      this.modalCtrl.create({component:TermsComponent,enterAnimation:mdEnterAnimation})
      .then((modal) => {
        modal.present();
      });
    },1000);
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result: any) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason: any) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
    let root: HTMLElement | null = document.querySelector('.floating3');
    root?.classList.add('reverse');
    setTimeout(()=>{
      this.open(this.modalCompartilhamento);
    },1000);
  }

}
