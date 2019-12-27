import { LoginService } from './../../services/login.service';
import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  control = new FormControl('', Validators.required);
  angularFireAuth: any;


  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private loginService: LoginService) {
              }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [
        null,
        [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [Validators.required, Validators.minLength(6), Validators.maxLength(30)]
      ]
    });
  }

  isValid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    const result = control.invalid && control.touched;

    return result;
  }

  public clearFormFields() {
    this.loginForm.reset();
  }

  // login({ email, password }: LoginModel): Observable<UserFirebaseDto> {
  //   return from(
  //     this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
  //   ).pipe(pluck('user'));
  // }

  // tslint:disable-next-line: adjacent-overload-signatures
  onEmailLogin(users): void {
    const user = this.loginForm.value;

    if (this.loginForm.valid) {
      // console.log(user);
      this.loginService.getUsers().push(user);
      users = this.loginService.getUsers();
      console.log(users);
      this.router.navigateByUrl('login');
    }
  }

}
