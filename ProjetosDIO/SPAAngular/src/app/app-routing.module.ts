import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { Compo3Component } from './compo3/compo3.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'compo1',
    component: Compo1Component
  },
  {
    path: 'compo2',
    component: Compo2Component
  },
  {
    path: 'compo3',
    component: Compo3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
