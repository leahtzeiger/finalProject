import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AccompanierService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getBuses() {
    return this.http.get(environment.api + '/accompanier/getBuses?userId='+this.userService.userId);}
  getBus(busId: number) {
    return this.http.get(environment.api + '/accompanier/getBus?id='+busId);
  }
  
}
