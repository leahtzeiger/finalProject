import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { bus } from '../models/bus.model';
import { accompanier } from '../models/accompanier.model';
=======
//import { environment } from '../../../environments/environment';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { accompanier } from '../models/accompanier.model';
import { bus } from '../models/bus.model';
>>>>>>> 9a5c2b8149076f895f5d714ee25d8d2aa936a943

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

<<<<<<< HEAD
  getAccompanierBuses(id:number): Observable<bus[]> {
    return this.http.get<bus[]>(environment.api + '/accompanier/getBuses?userId=' + this.userService.userId);
  }

  getChosenBus(busId: number):Observable<bus>{
    return this.http.get<bus>(environment.api + '/accompanier/getBus?id=' + busId);
  }

  getAll(): Observable<accompanier[]> {
    return this.http.get<accompanier[]>(environment.api+'accompanier/getAll');
  }

  getById(id:number):Observable<accompanier>{
    return this.http.get<accompanier>(environment.api+'/accomapier/getById?id=id')
  }

  addAccompanier(accompanier:accompanier):Observable<boolean>{
    return this.http.post<boolean>(environment.api+'accompanier/AddAccompanier',accompanier);
  }

  deleteAccompanier(id:number):Observable<boolean>{
    return this.http.get<boolean>(environment.api+'/accompanier/DeleteAccompanier?id=id');
=======
  getBuses() {
    return this.http.get<bus[]>(environment.api + '/accompanier/getBusesOfUser?userId='+this.userService.userId);
  }
 
    getBus(busId: number) {
    return this.http.get<bus>(environment.api + '/accompanier/getBusById?id='+busId);
>>>>>>> 9a5c2b8149076f895f5d714ee25d8d2aa936a943
  }
  
  assignAccompanierTobus(busId:number,accompanierId:number){
    return this.http.post(environment.api+'/accompanier/assignAccompanierTobus',{busId,accompanierId});
  }
}
