import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { legalInfoPage } from './legalInfo.page';

const routes: Routes = [
  {
    path: '',
    component: legalInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class legalInfoPageRoutingModule {}
