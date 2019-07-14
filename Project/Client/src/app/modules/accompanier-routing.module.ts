import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseBusComponent } from '../components/accompaniers/choose-bus/choose-bus.component';

const routes: Routes = [
  {path:'',redirectTo:'chooseBus',pathMatch:'full'},
  {path:'chooseBus',component:ChooseBusComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccompanierRoutingModule { }
