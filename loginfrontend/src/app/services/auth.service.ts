import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  getUserDetails(): any {
    return localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;
  }
  setDataInLocalStorage(variableName, data): any {
    localStorage.setItem(variableName, data);
  }
  getToken(): any {
    return localStorage.getItem('token');
  }
  clearStorage(): any {
    localStorage.clear();
  }
}
