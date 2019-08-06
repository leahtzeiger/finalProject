import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { accompanier } from '../models/accompanier.model';
import { driver } from '../models/driver.model';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  addDriver(currentDriver: driver) {
    return this.http.post(environment.api + "/driver/addDriver", { currentDriver });
  }
  getDrivers() {
    return this.http.get<driver[]>(environment.api + "/driver/getDriver");
  }
  getDriverById(driverId:number) {
    return this.http.get<driver>(environment.api + "/driver/getDriver?id="+driverId);
  }
  updateDriver(currentDriver: driver){
    return this.http.post(environment.api+'/driver/update',{currentDriver})
  }
  constructor(private http: HttpClient) { }
  
 
}
