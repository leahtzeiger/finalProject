import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccompanierRoutingModule } from './accompanier-routing.module';
import { ChooseBusComponent } from '../components/accompaniers/choose-bus/choose-bus.component';
import { SharedModule } from './shared.module';

@NgModule({
  imports: [
    CommonModule,
    AccompanierRoutingModule,
    SharedModule
  ],
  declarations: [ChooseBusComponent]
})
export class AccompanierModule { }
