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

  constructor(private http: HttpClient) { }
  
  addAccompanier(a: accompanier) {
    return this.http.post(environment.api + "/accompanier/addAccompanier", { a });
  }
  getAccompaniers() {
    return this.http.get<accompanier[]>(environment.api + "/accompanier/getAccompanier");
  }
}
