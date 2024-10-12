import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDataPage } from './registerData.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterDataPageRoutingModule {}
