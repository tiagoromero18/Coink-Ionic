import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-registerNumber',
  templateUrl: 'registerNumber.page.html',
  styleUrls: ['registerNumber.page.scss'],
})
export class RegisterNumberPage {

  constructor(private navCtrl: NavController) {}

  phoneNumber: string = '';
  isComplete: boolean = false;

  addNumber(num: string) {
    if (this.phoneNumber.length < 10) {
      this.phoneNumber += num;
    }
    this.updateDisplay();
  }

  backspace() {
    this.phoneNumber = this.phoneNumber.slice(0, -1);
    this.updateDisplay();
  }

  updateDisplay() {
    const formattedNumber = this.phoneNumber.padEnd(10, 'X').replace(/(\d{3})(\d{0,7})/, '$1-$2');
    const displayElement = document.getElementById('number-display');
    if (displayElement) {
      displayElement.innerText = formattedNumber;
    }
    this.isComplete = this.phoneNumber.length === 10;
    if (this.isComplete) {
      if (this.phoneNumber.startsWith('3')) {
        // Put the number inside a JSON object
        const jsonObject = {
          phoneNumber: this.phoneNumber
        };
        console.log(JSON.stringify(jsonObject));
      } else {
        this.isComplete = false;
      }
    }
  }

  checkComplete() {
    if (this.isComplete) {
      this.navCtrl.navigateForward('/registerData');
    }
  }

  back(){
    this.navCtrl.navigateForward('/home')
  }  

  ngOnInit() {

  }
}
