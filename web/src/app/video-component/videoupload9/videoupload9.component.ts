import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service';
import { VideoService } from 'src/app/services/video.service';
@Component({
  selector: 'app-videoupload9',
  templateUrl: './videoupload9.component.html',
  styleUrls: ['./videoupload9.component.css']
})
export class Videoupload9Component implements OnInit {


  constructor(private VideoService : VideoService) { }

  ngOnInit(): void {
  }

  public uploadlink9 ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink9)
    this.VideoService.uploadLink9(this.uploadlink9)
    alert('Upload 09 grade sucess')

  }
}
