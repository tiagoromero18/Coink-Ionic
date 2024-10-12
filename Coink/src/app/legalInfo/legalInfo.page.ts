import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-legalInfo',
  templateUrl: 'legalInfo.page.html',
  styleUrls: ['legalInfo.page.scss'],
})
export class legalInfoPage {
  isChecked: boolean = false;
  constructor(private navCtrl: NavController){}

  onCheckboxChange() {
    const checkbox = document.querySelector('.custom-checkbox') as HTMLElement;
    if (this.isChecked) {
      checkbox.classList.add('checked');
    } else {
      checkbox.classList.remove('checked');
    }
  }

  back(){
    this.navCtrl.navigateForward('/registerData')
  }

  accept(){
    this.navCtrl.navigateForward('/home')
  }
}