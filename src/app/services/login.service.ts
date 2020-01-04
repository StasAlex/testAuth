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

  public getUsers() {
    return null;
  }

  loginUser(email, password): Observable<User> {
    console.log('Login with email and password!');
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
    .pipe(
      pluck('user'),
    );
    // .subscribe((data) => { console.log(data);});

  }

}
