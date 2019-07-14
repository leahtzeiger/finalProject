import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from '../student/add-student/add-student.component';
import { AddAccompanierComponent } from './accompaniers/add-accompanier/add-accompanier.component';
import { AddDriverComponent } from './drivers/add-driver/add-driver.component';
import { ShowStudentComponent } from '../student/show-student/show-student.component';
import{AccompanierListComponent}from './accompaniers/accompanier-list/accompanier-list.component'
import { ShowAcompanierComponent } from './accompaniers/show-acompanier/show-acompanier.component';
import { ShowDriverComponent } from './drivers/show-driver/show-driver.component';
import { DriverListComponent } from './drivers/driver-list/driver-list.component';
const routes: Routes = [
{path:'',component:HomeComponent}
,{path:'add-student',component:AddStudentComponent}
,{path:'add-accompanier',component:AddAccompanierComponent}
,{path:'add-driver',component:AddDriverComponent}
,{path:'students',component:ShowStudentComponent}
,{path:'accompanier-list',component:AccompanierListComponent}
,{path:'driver-list',component:DriverListComponent}
,{path:'show-student/:id',component:ShowStudentComponent}
,{path:'show-accopanier/:id',component:ShowAcompanierComponent}
,{path:'show-driver/:id',component:ShowDriverComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
