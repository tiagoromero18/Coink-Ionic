import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-registerNumber',
  templateUrl: 'registerNumber.page.html',
  styleUrls: ['registerNumber.page.scss'],
})
export class RegisterNumberPage {

  constructor(private navCtrl: NavController) {}

  phoneNumber: string = '';

  addNumber(num: string) {
    this.phoneNumber += num;
  }

  ngOnInit() {

  }
}
