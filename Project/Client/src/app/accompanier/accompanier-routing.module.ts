import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseBusComponent } from './choose-bus/choose-bus.component';

const routes: Routes = [
  {path:'',component:ChooseBusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccompanierRoutingModule { }
