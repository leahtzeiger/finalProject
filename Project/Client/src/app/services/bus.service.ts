import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { bus } from '../models/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<bus[]>(environment.api+'bus/getAll');
  }
  getBusById(id:number){
    return this.http.get<bus>(environment.api+'bus/getById?id='+id);
  }
  add(bus:bus){
    return this.http.post(environment.api+'bus/add',{bus});
  }
  update(bus:bus){
    return this.http.post(environment.api+'bus/update',{bus});
  }
  delete(id:number){
    return this.http.delete(environment.api+'bus/delete?id='+id);
  }
}