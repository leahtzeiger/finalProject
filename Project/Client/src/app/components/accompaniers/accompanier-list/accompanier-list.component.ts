import { Component, OnInit } from '@angular/core';
import { accompanier } from '../../../models/accompanier.model';
import { Router } from '@angular/router';
import { AccompanierService } from 'src/app/services/accompanier.service';

@Component({
  selector: 'app-accompanier-list',
  templateUrl: './accompanier-list.component.html',
  styleUrls: ['./accompanier-list.component.css']
})

export class AccompanierListComponent implements OnInit {

<<<<<<< HEAD
  accompaniers: accompanier[];

  constructor(private accompanierService: AccompanierService, private router: Router) {
=======
  accompaniers:accompanier[]=[];
  constructor(private accompanierService:AccompanierService,private Router:Router) {
   this.accompanierService.getAccompaniers().subscribe(accompanier=>this.accompaniers=accompanier);
>>>>>>> 9a5c2b8149076f895f5d714ee25d8d2aa936a943
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.accompanierService.getAll().subscribe((res: accompanier[]) => {
      this.accompaniers = res
    })
  }

  routeToAddAccompanier() {
    this.router.navigate(['add-accompanier']);
  }

  deleteAccompanier(id: number) {
    //open madal confirm deletion
    this.accompanierService.deleteAccompanier(id);
  }

}
