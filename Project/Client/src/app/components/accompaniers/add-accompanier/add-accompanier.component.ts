import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';
import { accompanier } from '../../../models/accompanier.model';
import { AccompanierService } from 'src/app/services/accompanier.service';

@Component({
  selector: 'app-add-accompanier',
  templateUrl: './add-accompanier.component.html',
  styleUrls: ['./add-accompanier.component.css']
})
export class AddAccompanierComponent implements OnInit {

  currentAccompanier: accompanier;

  constructor(private accompanierService: AccompanierService) {
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
