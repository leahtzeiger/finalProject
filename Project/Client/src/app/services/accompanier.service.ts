import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { bus } from '../models/bus.model';
import { accompanier } from '../models/accompanier.model';

@Injectable({
  providedIn: 'root'
})
export class AccompanierService {

  constructor(private http: HttpClient, private userService: UserService) { }

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
  }
  
}
