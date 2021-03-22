import { Component, OnInit } from '@angular/core';
import { PaperService } from 'src/app/services/paper.service';

@Component({
  selector: 'app-paperupload08',
  templateUrl: './paperupload08.component.html',
  styleUrls: ['./paperupload08.component.css']
})
export class Paperupload08Component implements OnInit {

  constructor(private VideoService : PaperService) { }

  ngOnInit(): void {
  }

  public uploadlink ={videoPath:'',videoname:'',subjectname:''}


  sendData(){
    console.log(this.uploadlink)
    this.VideoService.uploadgrade08(this.uploadlink)
    alert('Upload sucess')

  }

}
