import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { legalInfoPageRoutingModule } from './legalInfo-routing.module';
import { legalInfoPage } from './legalInfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    legalInfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [legalInfoPage]
})
export class LegalInfoPageModule {}