
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  isLoggedin: boolean = false;

  /*private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl ="http://localhost:3000/api/login";
  private _adminloginUrl="http://localhost:3000/login"
  constructor(private http : HttpClient ,
      private _router : Router
    ) { }



//////////////////////////////////admin


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
  registerAdmin(registerObj){
    this.http.post('http://localhost:3000/register',registerObj).subscribe(res=>{
      console.log(res)
    })
  }

}*/


endpoint: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router,
    private httpClient: HttpClient
  ) {
  }

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  signIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('ACCESS_TOKEN', "access_token");
        this.isLoggedin = true;
      this.router.navigate(['/app-dashboard'])


      })


  }


  sendImage(Image: FormData) {
    return this.httpClient.post('http://localhost:3000/api/profileImage', Image);
  }







  getToken() {
    return localStorage.getItem('access_token');
  }

  isLoggedIn1() {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }







  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigateByUrl('/home');
    }
  }

  // User profile


  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }



  isLoggedIn() {

    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
}

