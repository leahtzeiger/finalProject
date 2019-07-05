import { Component, OnInit } from '@angular/core';
import { user, userModule, loginRequest } from '../shared/models/user.model'
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginName: string;
  password: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(loginName:string,password:string): void {
    const request: loginRequest = {
      loginName,
      password
    };
    this.userService.login(request)
      .subscribe((moduleId: userModule) => {
        if (moduleId == userModule.Manager)
          this.router.navigate(['/manager']);
        else if (moduleId == userModule.Accompanier)
          this.router.navigate(['/accompanier']);
        if (moduleId == userModule.Driver)
          this.router.navigate(['/driver']);
      }
      );
  }
}
