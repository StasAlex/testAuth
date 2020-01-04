import { LoginService } from './../../services/login.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private router: Router,
    private loginService: LoginService
    ) {}


  ngOnInit(): void {
    this.user$ = this.loginService.getUser()
    .pipe(
      tap((user: User) => {
        if (!user) {
          this.router.navigate(['/home']);
        }
      })
    );

  }

  logout(): void {
    this.loginService.logOut().subscribe(
      () => {
        this.router.navigate(['/home']);
      }
    );

  }
}
