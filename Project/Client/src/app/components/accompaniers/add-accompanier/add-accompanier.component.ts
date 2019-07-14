import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';
import { accompanier } from '../../../models/accompanier.model';

@Component({
  selector: 'app-add-accompanier',
  templateUrl: './add-accompanier.component.html',
  styleUrls: ['./add-accompanier.component.css']
})
export class AddAccompanierComponent implements OnInit {
  currentAccompanier: accompanier;
  constructor(private managerService: ManagerService) {
    this.currentAccompanier = <accompanier>{};
  }
  addaccompanier() {
    this.managerService.addAccompanier(this.currentAccompanier)
      .subscribe(a => {
        console.log(a.valueOf());
      });
  }
  ngOnInit() {
  }

}
