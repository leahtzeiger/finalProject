import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http } from '@angular/http'
//import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { retryWhen, map, mergeMap } from 'rxjs/operators';
import { resolve, reject } from 'q';
import { loginRequest, loginResponse, userModule } from '../models/user.model';
import { environment } from 'src/environments/environment';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userId: number;
  constructor(private http: HttpClient) { }

  login(request: loginRequest) {
    return this.http.post(environment.api + '/User/login', request)
      .pipe(
        map((response: loginResponse) => {
          this.userId = response.userId;
          return response.moduleId;
        },
          (error) => {
            return userModule.None;
          }));
  }
  getModule(userNum: number) {
    return this.http.post(environment.api + 'userService/', userNum);
  }

}
