import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { welcomePageRoutingModule } from './welcome-routing.module';
import { welcomePage } from './welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    welcomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [welcomePage]
})
export class WelcomePageModule {}