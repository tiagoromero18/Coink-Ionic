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
    } //Cuando se hace check al checkbox se habilita el boton a traves de estilos de css al boton de continuar
  }

  back(){
    this.navCtrl.navigateForward('/registerData')
  } //ir un paso atras

  accept(){
    this.navCtrl.navigateForward('/welcome')
  } //pasar a la pagina final
}