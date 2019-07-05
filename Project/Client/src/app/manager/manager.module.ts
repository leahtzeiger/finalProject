import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from '../student/students/students.component';
import { AddStudentComponent } from '../student/add-student/add-student.component';
import {SharedModule}from'../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AddAccompanierComponent } from './add-accompanier/add-accompanier.component';
import { AddDriverComponent } from '../manager/drivers/add-driver/add-driver.component';
import{ShowStudentComponent}from '../student/show-student/show-student.component';
import{UpdateStudentComponent}from '../student/update-student/update-student.component';
import { AccompanierListComponent } from '../manager/accompaniers/accompanier-list/accompanier-list.component';
import { DriverListComponent } from './drivers/driver-list/driver-list.component';
import { ShowAcompanierComponent } from './accompaniers/show-acompanier/show-acompanier.component';
import { ShowDriverComponent } from './drivers/show-driver/show-driver.component';
import { UpdateDriverComponent } from './drivers/update-driver/update-driver.component';
import { UpdateAccompanierComponent } from '../manager/accompaniers/update-accompanier/update-accompanier.component';
@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
  ],
  declarations:
   [
     HomeComponent, 
     StudentsComponent,
     AddStudentComponent,
     AddAccompanierComponent,
     AddDriverComponent,
     ShowStudentComponent,
     UpdateStudentComponent,
     AccompanierListComponent,
     DriverListComponent,
     ShowAcompanierComponent,
     ShowDriverComponent,
     UpdateDriverComponent,
     UpdateAccompanierComponent
     ]
})
export class ManagerModule { }
