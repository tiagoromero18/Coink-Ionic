import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registerNumber',
  templateUrl: 'registerNumber.page.html',
  styleUrls: ['registerNumber.page.scss'],
})
export class RegisterNumberPage implements OnInit {
  phoneNumber: string = '';
  isComplete: boolean = false;

  constructor(private navCtrl: NavController) {}

  addNumber(num: string) {
    if (this.phoneNumber.length < 10) {
      this.phoneNumber += num;
    }
    this.updateDisplay();
  } //Añade un numero a la lista en la cual se va a mostrar el numero

  backspace() {
    this.phoneNumber = this.phoneNumber.slice(0, -1);
    this.updateDisplay();
  } //funcion para borrar el ultimo numero puesto

  checkComplete() {
    if (this.isComplete) {
      this.navCtrl.navigateForward('/registerData');
    }
  } //revisa si esta completo, en caso tal pasa a la siguiente pagina

  back() {
    this.navCtrl.navigateForward('/home');
  } //se devuelve a la pagina anterior

  ngOnInit() {}

  private updateDisplay() {
    const formattedNumber = this.formatPhoneNumber(this.phoneNumber);
    this.setDisplayElementText(formattedNumber);
    this.checkPhoneNumberCompleteness();
  } //Cambia el numero que se muestra en la pantalla

  private formatPhoneNumber(phoneNumber: string): string {
    return phoneNumber.padEnd(10, 'X').replace(/(\d{3})(\d{0,7})/, '$1-$2');
  } //Numero con el formato pedido

  private setDisplayElementText(text: string) {
    const displayElement = document.getElementById('number-display');
    if (displayElement) {
      displayElement.innerText = text;
    }
  }

  private checkPhoneNumberCompleteness() {
    this.isComplete = this.phoneNumber.length === 10;
    if (this.isComplete) {
      if (this.phoneNumber.startsWith('3')) {
        const jsonObject = { phoneNumber: this.phoneNumber };
        console.log(JSON.stringify(jsonObject));
      } else {
        this.isComplete = false;
      }
    }
  } //Revisa que el numero este completo y que el mismo empiece con 3
}
