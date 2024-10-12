import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {

    const registerButton = document.getElementById('registerButton');
    console.log(registerButton)
    if (registerButton) {
      registerButton.addEventListener('click', () => {
        this.navCtrl.navigateForward('/registerNumber');
      });
    }

    const contentElement = document.getElementById('content');
    if(contentElement){
      contentElement.style.setProperty('--background-color', '#1EEA00');
    }

    setTimeout(() => {
      const introElement = document.getElementById('intro');
      const mainContent = document.getElementById('main-content');

      if (introElement && mainContent && contentElement) {
        introElement.classList.add('hidden');
        mainContent.classList.remove('hidden');
        contentElement.style.setProperty('--background-color', 'white');
      }
    }, 2000); // 0.5 seconds
  }
}
