import { Component, OnInit } from '@angular/core';
import { accompanier } from '../../../models/accompanier.model';
import { AccompanierService } from 'src/app/services/accompanier.service';

@Component({
  selector: 'app-add-accompanier',
  templateUrl: './add-accompanier.component.html',
  styleUrls: ['./add-accompanier.component.css']
})
export class AddAccompanierComponent implements OnInit {

  currentAccompanier: accompanier;
<<<<<<< HEAD

  constructor(private accompanierService: AccompanierService) {
=======
  constructor(private accompanierService:AccompanierService) {
    this.currentAccompanier = <accompanier>{};
  }
  addaccompanier() {
    this.accompanierService.addAccompanier(this.currentAccompanier)
      .subscribe(a => {
        console.log(a.valueOf());
      });
>>>>>>> 9a5c2b8149076f895f5d714ee25d8d2aa936a943
  }

  ngOnInit() {
  }

  addAccompanier() {
    this.accompanierService.addAccompanier(this.currentAccompanier).subscribe((res:boolean) => {
      if (res)
        this.success();
      else
        this.failure();
    })
  }

  success() {
    //show message operation seeccesd
  }

  failure() {
    //show message operation failed
  }
}
