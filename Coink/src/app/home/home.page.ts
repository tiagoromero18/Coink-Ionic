import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit() {

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
