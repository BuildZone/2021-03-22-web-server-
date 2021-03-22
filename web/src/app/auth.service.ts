import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl ="http://localhost:3000/api/login";
  private _adminloginUrl="http://localhost:3000/login"
  constructor(private http : HttpClient ,
      private _router : Router
    ) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken(){
    return localStorage.getItem('token')
  }

//////////////////////////////////admin
private _putUrl7 = 'http://localhost:3000/api/userdetails/';
  userdetails(){
   return this.http.get<any>(this._putUrl7);
 }

  getAdminToken(){
    return localStorage.getItem('tokenAdmin')
  }

  adminLogoutuser(){
    localStorage.removeItem('tokenAdmin')
    this._router.navigate(['/home'])
  }

  loginAdmin(Admin) {
    return this.http.post<any>(this._adminloginUrl , Admin)
  }

  adminLoggedIn(){
    return !!localStorage.getItem('tokenAdmin')
  }


}
