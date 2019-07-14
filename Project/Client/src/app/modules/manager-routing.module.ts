import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from'../components/home/home.component';
import{AddStudentComponent}from '../components/student/add-student/add-student.component';
import{ShowStudentComponent}from '../components/student/show-student/show-student.component';
import{AddAccompanierComponent}from '../components/accompaniers/add-accompanier/add-accompanier.component';
import{AccompanierListComponent}from '../components/accompaniers/accompanier-list/accompanier-list.component';
import{ShowAcompanierComponent}from '../components/accompaniers/show-acompanier/show-acompanier.component';
const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'}
,{path:'home',component:HomeComponent}
,{path:'add-student',component:AddStudentComponent}
,{path:'add-accompanier',component:AddAccompanierComponent}
,{path:'students',component:ShowStudentComponent}
,{path:'accompanier-list',component:AccompanierListComponent}
,{path:'show-student/:id',component:ShowStudentComponent}
,{path:'show-accopanier/:id',component:ShowAcompanierComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
