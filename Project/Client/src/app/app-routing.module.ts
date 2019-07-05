import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManagerModule } from './manager/manager.module';

const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'manager',loadChildren: () => import('./manager/manager.module').then(mod => mod.ManagerModule)},
    {path:'accompanier',loadChildren: () => import('./accompanier/accompanier.module').then(mod => mod.AccompanierModule)},
    {path:'driver',loadChildren: () => import('./driver/driver.module').then(mod => mod.DriverModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }