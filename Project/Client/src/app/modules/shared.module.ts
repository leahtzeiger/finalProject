import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,  ],
  exports:[
    CommonModule,
    MatFormFieldModule,
    MatInputModule, 
  ],
  declarations: []
})
export class SharedModule { }
