import { LoginModel } from './../../models/login.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  control = new FormControl('', Validators.required);

  constructor(private router: Router, private formBuilder: FormBuilder) {}

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

  onEmailLogin(): void {
    this.router.navigate(['/login']);
  }

  public clearFormFields() {
    this.loginForm.reset();
  }
}
