import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Storage } from '@ionic/storage';
import { User } from './user';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserResponse } from './user-response';
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_LOGIN_ADDRESS = 'http://192.168.1.106:3000/authentication/login';
  userSubject = new BehaviorSubject(false);

  login(user: {username: string, password: string}): Observable<UserResponse> {
    return this.httpClient.post(this.AUTH_LOGIN_ADDRESS, user).pipe(
      tap(async(res: UserResponse) => {
        await this.storage.set('ACCESS_TOKEN', res.data[0].accessToken.token);
      })
    )
  }

  constructor(private httpClient: HttpClient, private storage: Storage) { }

}
