import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service'
import { VideoService } from 'src/app/services/video.service';
@Component({
  selector: 'app-videoupload8',
  templateUrl: './videoupload8.component.html',
  styleUrls: ['./videoupload8.component.css']
})
export class Videoupload8Component implements OnInit {


  constructor(private VideoService : VideoService) { }

  ngOnInit(): void {
  }

  public uploadlink8 ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink8)
    this.VideoService.uploadLink8(this.uploadlink8)
    alert('Upload 08 grade sucess')

  }
}
