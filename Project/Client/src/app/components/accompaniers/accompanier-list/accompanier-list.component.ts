import { Component, OnInit } from '@angular/core';
import { accompanier } from 'src/app/shared/models/accompanier.model';
import { ManagerService } from 'src/app/shared/services/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accompanier-list',
  templateUrl: './accompanier-list.component.html',
  styleUrls: ['./accompanier-list.component.css']
})
export class AccompanierListComponent implements OnInit {

  accompaniers:accompanier[]=[];
  constructor(private managerService: ManagerService,private Router:Router) {
   this.managerService.getAccompaniers().subscribe(accompanier=>this.accompaniers=accompanier);
  }

  ngOnInit() {
  }

}
