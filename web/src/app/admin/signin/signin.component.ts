import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AdminService } from './../../shared/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AdminService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit() { }
/*
  loginUser() {
    this.authService.signIn(this.signinForm.value)

  }
*/

loginUser() {
  this.authService.signIn(this.signinForm.value)

  /*.subscribe(
    res => {
      console.log(res)
      localStorage.setItem('access_token', res.token)
      this.router.navigate(['/app-dashboard'])

    },

    .subscribe((res: any) => {
      localStorage.setItem('access_token', res.token)

      this.router.navigate(['/app-dashboard'])
      })*/




}
}
