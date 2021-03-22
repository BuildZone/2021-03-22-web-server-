import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service';
import { VideoService } from 'src/app/services/video.service';
@Component({
  selector: 'app-videoupload10',
  templateUrl: './videoupload10.component.html',
  styleUrls: ['./videoupload10.component.css']
})
export class Videoupload10Component implements OnInit {


  constructor(private VideoService : VideoService) { }

  ngOnInit(): void {
  }

  public uploadlink10 ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink10)
    this.VideoService.uploadLink10(this.uploadlink10)
    alert('Upload 10 grade sucess')

  }

}
