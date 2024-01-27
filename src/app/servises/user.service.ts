import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";
import {Observable, of} from "rxjs";

export type id = string;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  saveUser(user: User): Observable<User> {
    const userStr = localStorage.getItem('users');
    const userMap: Map<id, User> = userStr ? new Map(Object.entries(JSON.parse(userStr))) : new Map();
    userMap.set(user.email, user);
    localStorage.setItem('users', JSON.stringify(Object.fromEntries(userMap.entries())));
    return of(user);
  }

  getUsers(): Observable<User[]> {
    const userStr = localStorage.getItem('users');
    if(!userStr) {
      localStorage.setItem('users', JSON.stringify({}));
      return of([]);
    }
    return of(Array.from(
      new Map<id, User>(Object.entries(JSON.parse(userStr)))
        .values()
      )
    );
  }
}
