import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerData',
  templateUrl: 'registerData.page.html',
  styleUrls: ['registerData.page.scss'],
})
export class RegisterDataPage implements OnInit {
  documentTypes: any[] = [];
  form: FormGroup;
  isComplete: boolean = false;
  passwordType: string = 'password';

  constructor(private navCtrl: NavController, private fb: FormBuilder, private alertController: AlertController) {
    this.form = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      issueDate: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      pin: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      confirmPin: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });
  }

  back(){
    this.navCtrl.navigateForward('/registerNumber')
  }

  ngOnInit() {
    const apiKey = '030106';
    const url = `https://api.bancoink.biz/qa/signup/documentTypes?apiKey=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.documentTypes = data.documentTypes;
      })
      .catch(error => console.error('Error:', error));
    this.form.valueChanges.subscribe(() => {
      this.validateForm();
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  togglePassword(field: string) {
    const input = document.getElementById(field) as HTMLIonInputElement;
    const icon = document.getElementById(`${field}-icon`) as HTMLIonIconElement;

    if (input && icon) {
      const inputType = input.type === 'password' ? 'text' : 'password';
      input.type = inputType;

      const iconName = input.type === 'password' ? 'eye' : 'eye-off';
      icon.name = iconName;
    }
  }

  validateForm() {
    const pinInput = document.getElementById('pin') as HTMLIonInputElement;
    const confirmPinInput = document.getElementById('confirmPin') as HTMLIonInputElement;
    const emailInput = document.getElementById('email') as HTMLIonInputElement;
    const confirmEmailInput = document.getElementById('confirmEmail') as HTMLIonInputElement;
  
    const pin = pinInput?.value?.toString() || '';
    const confirmPin = confirmPinInput?.value?.toString() || '';
    const email = emailInput?.value?.toString() || '';
    const confirmEmail = confirmEmailInput?.value?.toString() || '';
  
    const allFilled = this.form.valid && email === confirmEmail && pin === confirmPin;
  
    this.isComplete = allFilled;
  }
  

  async register() {
    if (this.form.controls['pin'].value !== this.form.controls['confirmPin'].value) {
      await this.presentAlert('Los PINs no coinciden.');
    }
    else if (this.form.controls['email'].value !== this.form.controls['confirmEmail'].value) {
      await this.presentAlert('Los correos electrónicos no coinciden.');
    }
    else{
      this.navCtrl.navigateForward('/home')
    }
  }  
}
