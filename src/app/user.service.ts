import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(url: string) {
    return this.http.get(url);
  }

  getUserById(url: string, id: string) {
    return this.http.get(url + '/' + id);
  }

  addUser(url: string, user: any) {
    return this.http.post(url, user);
  }

  updateUser(url: string, id: string, user: any) {
    return this.http.put(url + '/' + id, user);
  }

  deleteUser(url: string, id: string) {
    return this.http.delete(url + '/' + id);
  }
}
