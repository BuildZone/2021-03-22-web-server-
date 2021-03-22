import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service'
import { VideoService } from 'src/app/services/video.service';
@Component({
  selector: 'app-videoupload07',
  templateUrl: './videoupload07.component.html',
  styleUrls: ['./videoupload07.component.css']
})
export class Videoupload07Component implements OnInit {

  constructor(private VideoService : VideoService) { }

  ngOnInit(): void {
  }

  public uploadlink07 ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink07)
    this.VideoService.uploadLink07(this.uploadlink07)
    alert('Upload 07 grade sucess')

  }
}
