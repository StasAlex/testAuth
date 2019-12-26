import { LoginModel } from './../../models/login.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  user: LoginModel = new LoginModel();
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/home']);
  }
}
