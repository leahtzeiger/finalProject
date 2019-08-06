import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../../../environments/environment';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { accompanier } from '../models/accompanier.model';
import { bus } from '../models/bus.model';

@Injectable({
  providedIn: 'root'
})
export class AccompanierService {

  constructor(private http: HttpClient, private userService: UserService) { }
 
  getAccompaniers() {
    return this.http.get<accompanier[]>(environment.api + "/accompanier/get");
  }

  getAccompanier(id: number) {
    return this.http.get<accompanier>(environment.api + '/accompanier/getById?id='+id);
  }

  addAccompanier(a: accompanier) {
    return this.http.post(environment.api + "/accompanier/create", { a });
  }

  deleteAccompanier(id:number){
    return this.http.delete(environment.api+'/accompanier/delete?id='+id);
  }

  updateAccompanier(a:accompanier){
    return this.http.post(environment.api+'/accompanier/update',{a});
  }

  getBuses() {
    return this.http.get<bus[]>(environment.api + '/accompanier/getBusesOfUser?userId='+this.userService.userId);
  }
 
    getBus(busId: number) {
    return this.http.get<bus>(environment.api + '/accompanier/getBusById?id='+busId);
  }
  
  assignAccompanierTobus(busId:number,accompanierId:number){
    return this.http.post(environment.api+'/accompanier/assignAccompanierTobus',{busId,accompanierId});
  }
}
