import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterDataPageRoutingModule } from './registerData-routing.module';
import { RegisterDataPage } from './registerData.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterDataPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterDataPage]
})
export class RegisterDataPageModule {}
