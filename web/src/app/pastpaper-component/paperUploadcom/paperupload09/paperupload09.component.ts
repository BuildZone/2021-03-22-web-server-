import { Component, OnInit } from '@angular/core';
import { PaperService } from 'src/app/services/paper.service';

@Component({
  selector: 'app-paperupload09',
  templateUrl: './paperupload09.component.html',
  styleUrls: ['./paperupload09.component.css']
})
export class Paperupload09Component implements OnInit {

  constructor(private VideoService : PaperService) { }

  ngOnInit(): void {
  }

  public uploadlink ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink)
    this.VideoService.uploadgrade09(this.uploadlink)
    alert('Upload sucess')

  }
}
