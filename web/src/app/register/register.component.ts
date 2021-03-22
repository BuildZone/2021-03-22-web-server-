import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData :any = {}

  userdataForm : FormGroup;
  submitted = false;
  success = false;

  constructor(private _auth : AuthService,
      private _router : Router,
      private formBuilder: FormBuilder
    ) {
      this.userdataForm = this.formBuilder.group({
        name: ['', Validators.required],
        email : ['', Validators.required],
        password : ['', Validators.required]
      })
    }
    
    isValid(){

      if(this.userdataForm.invalid){
        return false;
      }else {
        return true;
      }
      
    }


    
  onSubmit(){
    this.submitted = true;

    if(this.userdataForm.invalid){
      return;
    }

    this.success=true;

  }

  ngOnInit(): void {

  }

  registerUser(){

  
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err => console.log(err)
      
    )
  }
  
}
