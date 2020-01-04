import { LoginService } from './../../services/login.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  loginForm: FormGroup;
  control = new FormControl('', Validators.required);
  private email: any;
  private password: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    private login: LoginService,

  ) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // username: [
      //   null,
      //   [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      // ],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [Validators.required, Validators.minLength(6), Validators.maxLength(30)]
      ]
    });
  }

  // login({ email, password }: LoginModel): Observable<UserFirebaseDto> {
  //   return from(
  //     this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
  //   ).pipe(pluck('user'));
  // }

  // tslint:disable-next-line: adjacent-overload-signatures
  onEmailLogin() {
    this.login.loginUser(this.loginForm.value.email, this.loginForm.value.password)
    .subscribe(
      () => { this.router.navigateByUrl('/login'); },
      ({ message }) => { alert(message); }
    );
    // this.router.navigateByUrl('/login');
  }

  isValid() {}
  clearFormFields() {}
}
