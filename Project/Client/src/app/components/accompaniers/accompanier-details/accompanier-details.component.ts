import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccompanierService } from 'src/app/services/accompanier.service';
import { accompanier } from 'src/app/models/accompanier.model';

@Component({
  selector: 'app-accompanier-details',
  templateUrl: './accompanier-details.component.html',
  styleUrls: ['./accompanier-details.component.css']
})
export class AccompanierDetailsComponent implements OnInit {
  
  currentAccompanier:accompanier;

  constructor(private accompanierService:AccompanierService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAccompanier(+this.route.snapshot.paramMap.get('id'));
  }

  getAccompanier(id:number){
    this.accompanierService.getById(id).subscribe((res:accompanier)=>{
      this.currentAccompanier=res
    })
  }
}
