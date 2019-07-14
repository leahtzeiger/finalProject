import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'manager',loadChildren: () => import('./modules/manager.module').then(mod => mod.ManagerModule)},
    {path:'accompanier',loadChildren: () => import('./modules/accompanier.module').then(mod => mod.AccompanierModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }