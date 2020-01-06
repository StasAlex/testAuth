import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { User } from 'firebase';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth: AngularFireAuth,
              ) {
              }

  getUser(): Observable<User> {
    return this.afAuth.user;
  }

  loginUser(email, password): Observable<User> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
    .pipe(
      pluck('user'),
    );
  }

  loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return from(this.afAuth.auth.signInWithPopup(provider))
      .pipe(
        pluck('user'),
      );
  }

  loginWithFb() {
    const provider = new auth.FacebookAuthProvider();
    return from(this.afAuth.auth.signInWithPopup(provider))
      .pipe(
        pluck('user'),
      );
  }

  logOut(): Observable<void> {
    return from (this.afAuth.auth.signOut());
  }

}
