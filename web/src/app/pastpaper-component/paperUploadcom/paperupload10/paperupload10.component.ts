import { Component, OnInit } from '@angular/core';
import { PaperService } from 'src/app/services/paper.service';

@Component({
  selector: 'app-paperupload10',
  templateUrl: './paperupload10.component.html',
  styleUrls: ['./paperupload10.component.css']
})
export class Paperupload10Component implements OnInit {

  constructor(private VideoService : PaperService) { }

  ngOnInit(): void {
  }

  public uploadlink ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink)
    this.VideoService.uploadgrade10(this.uploadlink)
    alert('Upload sucess')

  }

}
