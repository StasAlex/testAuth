import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth: AngularFireAuth
              ) {}

  getUser(): Observable<User> {
    return this.afAuth.user;
  }

  loginUser(email, password): Observable<User> {
    console.log('Login with email and password!');
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
    .pipe(
      pluck('user'),
    );
  }

  logOut(): Observable<void> {
    return from (this.afAuth.auth.signOut());
  }

}
