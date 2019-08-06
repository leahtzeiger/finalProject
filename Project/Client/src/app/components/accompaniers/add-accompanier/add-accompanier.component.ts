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
  constructor(private accompanierService:AccompanierService) {
    this.currentAccompanier = <accompanier>{};
  }
  addaccompanier() {
    this.accompanierService.addAccompanier(this.currentAccompanier)
      .subscribe(a => {
        console.log(a.valueOf());
      });
  }
  ngOnInit() {
  }

}
