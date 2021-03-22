import { Component, OnInit } from '@angular/core';
import { PaperService } from 'src/app/services/paper.service';

@Component({
  selector: 'app-paperupload11',
  templateUrl: './paperupload11.component.html',
  styleUrls: ['./paperupload11.component.css']
})
export class Paperupload11Component implements OnInit {

  constructor(private paperServices : PaperService) { }

  ngOnInit(): void {
  }

  public uploadlink ={name:'',paperPath:''}


  sendData(){
    console.log(this.uploadlink)
    this.paperServices.uploadgrade11(this.uploadlink)
    alert('Upload sucess')

  }
}
