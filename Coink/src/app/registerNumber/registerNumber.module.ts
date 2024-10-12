import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterNumberPageRoutingModule } from './registerNumber-routing.module';
import { RegisterNumberPage } from './registerNumber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterNumberPageRoutingModule
  ],
  declarations: [RegisterNumberPage]
})
export class RegisterNumberPageModule {}

