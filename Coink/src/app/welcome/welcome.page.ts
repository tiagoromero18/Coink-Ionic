import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
})
export class welcomePage {
  
  constructor(private navCtrl: NavController){}

  continue(){
    this.navCtrl.navigateForward('/home')
  }
  
}