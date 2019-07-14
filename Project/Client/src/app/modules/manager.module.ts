import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { HomeComponent } from '../components/home/home.component';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from '../components/student/students/students.component';
import { AddStudentComponent } from '../components/student/add-student/add-student.component';
import { SharedModule } from '../modules/shared.module';
import { FormsModule } from '@angular/forms';
import { AddAccompanierComponent } from '../components/accompaniers/add-accompanier/add-accompanier.component';
import { ShowStudentComponent } from '../components/student/show-student/show-student.component';
import { UpdateStudentComponent } from '../components/student/update-student/update-student.component';
import { AccompanierListComponent } from '../components/accompaniers/accompanier-list/accompanier-list.component';
import { ShowAcompanierComponent } from '../components/accompaniers/show-acompanier/show-acompanier.component';
import { UpdateAccompanierComponent } from '../components/accompaniers/update-accompanier/update-accompanier.component';
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
      ShowStudentComponent,
      UpdateStudentComponent,
      AccompanierListComponent,
      ShowAcompanierComponent,
      UpdateAccompanierComponent
    ]
})
export class ManagerModule { }
