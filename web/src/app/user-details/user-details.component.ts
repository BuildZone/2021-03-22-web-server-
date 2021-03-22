import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  mylinkList = [];
  Users:[];
  user;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {

    this.auth.userdetails().subscribe(data => this.Users = data);


  }

 





}
