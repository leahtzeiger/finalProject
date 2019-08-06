import { Component, OnInit } from '@angular/core';
import { accompanier } from '../../../models/accompanier.model';
import { ManagerService } from '../../../services/manager.service';
import { Router } from '@angular/router';
import { AccompanierService } from 'src/app/services/accompanier.service';

@Component({
  selector: 'app-accompanier-list',
  templateUrl: './accompanier-list.component.html',
  styleUrls: ['./accompanier-list.component.css']
})
export class AccompanierListComponent implements OnInit {

  accompaniers:accompanier[]=[];
  constructor(private accompanierService:AccompanierService,private Router:Router) {
   this.accompanierService.getAccompaniers().subscribe(accompanier=>this.accompaniers=accompanier);
  }

  ngOnInit() {
  }

}
