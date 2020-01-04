import { LoginService } from './../../services/login.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

users: any[];

  constructor(
    private router: Router,
    private loginService: LoginService) {
      this.users = this.loginService.getUsers();
     }


  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/home']);
    console.log(this.users);
  }
}
