import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registerNumber',
    loadChildren: () => import('./registerNumber/registerNumber.module').then(m =>
      m.RegisterNumberPageModule)
  },
  {
    path: 'registerData',
    loadChildren: () => import('./registerData/registerData.module').then(m =>
      m.RegisterDataPageModule)
  },
  {
    path: 'legalInfo',
    loadChildren: () => import('./legalInfo/legalInfo.module').then(m =>
      m.LegalInfoPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
