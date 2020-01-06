import { LoginService } from './../../services/login.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [Validators.required, Validators.minLength(6), Validators.maxLength(30)]
      ]
    });
  }

  onEmailLogin() {
    this.loginService.loginUser(this.loginForm.value.email, this.loginForm.value.password)
    .subscribe(
      () => { this.router.navigateByUrl('/login'); },
      ({ message }) => { alert(message); }
    );
  }
  loginWithGoogle() {
    this.loginService.loginWithGoogle()
      .subscribe(
        () => { this.router.navigateByUrl('/login'); },
        ({ message }) => { alert(message); }
      );
  }
  loginWithFacebook() {
    this.loginService.loginWithFb()
      .subscribe(
        () => { this.router.navigateByUrl('/login'); },
        ({ message }) => { alert(message); }
      );
  }
  clearFormFields() {
    this.loginForm.reset();
  }

}
