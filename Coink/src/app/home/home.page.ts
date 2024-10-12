import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private navCtrl: NavController) {}

  register() {
    this.navCtrl.navigateForward('/registerNumber');
  } //Cuando se pulse el boton de registrar va a pasar a la siguiente pestaña

  login() {
    alert("El login no se ha creado");
  } //Alerta de que no se creo el Login para que no quede un boton sin uso

  ngOnInit() {
    this.setBackground('#1EEA00');

    setTimeout(() => {
      this.toggleContentVisibility();
    }, 2000); //Esto me va a dejar el intro de la aplicación por dos segundos
  }

  private setBackground(color: string) {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.style.setProperty('--background-color', color);
    } //Por el cambio de escena toca cambiar el color del fondo de la aplicación (Usamos factory y delegación de responsabilidades)
  }

  private toggleContentVisibility() {
    const introElement = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');
    const contentElement = document.getElementById('content');

    if (introElement && mainContent && contentElement) {
      introElement.classList.add('hidden');
      mainContent.classList.remove('hidden');
      contentElement.style.setProperty('--background-color', 'white');
    } //Aqui se hace la logica del cambio de pestaña donde pasa de ser un intro a ser un main content
  }
}
