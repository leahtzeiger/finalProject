import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../shared/services/manager.service';
import {driver}from '../../../shared/models/driver.model'

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
currentDriver:driver;
  constructor(private managerService:ManagerService) { }
addDriver(d:driver){
 this.managerService.addDriver(this.currentDriver).subscribe(d=>{

 });
}
  ngOnInit() {
  }

}
