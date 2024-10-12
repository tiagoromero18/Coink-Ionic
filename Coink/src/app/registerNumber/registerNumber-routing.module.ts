import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterNumberPage } from './registerNumber.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterNumberPageRoutingModule {}
