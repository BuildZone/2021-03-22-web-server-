import { Component, OnInit } from '@angular/core';
import { PaperService } from 'src/app/services/paper.service';

@Component({
  selector: 'app-paperupload06',
  templateUrl: './paperupload06.component.html',
  styleUrls: ['./paperupload06.component.css']
})
export class Paperupload06Component implements OnInit {

  constructor(private VideoService : PaperService) { }

  ngOnInit(): void {
  }

  public uploadlink ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink)
    this.VideoService.uploadgrade06(this.uploadlink)
    alert('Upload sucess')

  }
}
