import { Component, OnInit } from '@angular/core';
import { driver } from 'src/app/shared/models/driver.model';
import { ManagerService } from 'src/app/shared/services/manager.service';
import{Router}from '@angular/router';
@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  drivers:driver[]=[];
  constructor(private managerService: ManagerService,private Router:Router) {
  this.managerService.getDrivers().subscribe(driver=>this.drivers=driver);
  }

  ngOnInit() {
  }

}
