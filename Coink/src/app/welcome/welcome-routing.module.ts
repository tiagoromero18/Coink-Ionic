import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { welcomePage } from './welcome.page';

const routes: Routes = [
  {
    path: '',
    component: welcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class welcomePageRoutingModule {}
