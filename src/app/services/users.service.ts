import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = 'https://belar.pro/php/'
    constructor(
    private http: HttpClient
  ) { }

  createUser(user) {
    return this.http.post(this.baseUrl + 'insert.php', user)
  }
  setCurrentUser(user) {

  }
}
