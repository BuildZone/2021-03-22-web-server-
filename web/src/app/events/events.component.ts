import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { FormBuilder , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [];
  selectedTeacher : Event;
  result = false;
  InsertedTeacherData : any = {}

  TeacherDataForm : FormGroup;
  submitted = false;
  success = false;

  constructor(private _eventService : EventService, public _authservice : AuthService) { }

  ngOnInit(): void {

    this._eventService.getEvents()
    .subscribe(
      res => this.events=res,
      err => console.log(err)
    )

  }

  postTeacher(){
    this._eventService.postEvents(this.InsertedTeacherData)
    .subscribe(
      res=>{
        this.events.push(res);
        this.selectedTeacher=res;
      },
      err => console.log(err)
    )
  }


  // registerUser(){


  //   this._auth.registerUser(this.registerUserData)
  //   .subscribe(
  //     res => {
  //       console.log(res)
  //       localStorage.setItem('token', res.token)
  //       this._router.navigate(['/special'])
  //     },
  //     err => console.log(err)

  //   )
  // }


}
