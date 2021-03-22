import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service';
import { VideoService } from 'src/app/services/video.service';
@Component({
  selector: 'app-videoupload11',
  templateUrl: './videoupload11.component.html',
  styleUrls: ['./videoupload11.component.css']
})
export class Videoupload11Component implements OnInit {


  constructor(private VideoService : VideoService) { }

  ngOnInit(): void {
  }

  public uploadlink11 ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink11)
    this.VideoService.uploadLink11(this.uploadlink11)
    alert('Upload 11 grade sucess')

  }

}
