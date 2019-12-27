import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users: Array<any> = [];

  public getUsers() {
    return this.users;
  }
  constructor() {}
}
