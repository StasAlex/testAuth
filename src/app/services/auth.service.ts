import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthOutService implements CanActivate {

  constructor(
    public loginService: LoginService,
    public router: Router,
  ) {
   }

  canActivate(): Observable<boolean> {
    return this.loginService.getUser()
      .pipe(
        map((user: User) => !user),
        tap((isOut: boolean) => {
          if (!isOut) {
            this.router.navigate(['/login']);
          }
        })
      );
  }

}
@Injectable({
  providedIn: 'root'
})
export class AuthInService implements CanActivate {

  constructor(
    public loginService: LoginService,
    public router: Router,
  ) {
  }

  canActivate(): Observable<boolean> {
    return this.loginService.getUser()
      .pipe(
        map((user: User) => !!user),
        tap((isLogged: boolean) => {
          if (!isLogged) {
            this.router.navigate(['/home']);
          }
        })
      );
  }

}

