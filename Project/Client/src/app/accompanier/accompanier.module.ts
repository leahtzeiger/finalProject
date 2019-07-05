import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccompanierRoutingModule } from './accompanier-routing.module';
import { ChooseBusComponent } from './choose-bus/choose-bus.component';

@NgModule({
  imports: [
    CommonModule,
    AccompanierRoutingModule
  ],
  declarations: [ChooseBusComponent]
})
export class AccompanierModule { }
