import { Component, OnInit } from '@angular/core';
import { AccompanierService } from 'src/app/services/accompanier.service';
import { bus } from 'src/app/models/bus.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choose-bus',
  templateUrl: './choose-bus.component.html',
  styleUrls: ['./choose-bus.component.css']
})
export class ChooseBusComponent implements OnInit {

  buses:bus[];

  constructor(private accomapnierService:AccompanierService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAccompanierBuses(+this.route.snapshot.paramMap.get('id'));
  }

  getAccompanierBuses(id:number){
    this.accomapnierService.getAccompanierBuses(id).subscribe((res:bus[])=>{
      this.buses=res
    })
  }


}
