import { Component, OnInit } from '@angular/core';
import { PaperService } from 'src/app/services/paper.service';
@Component({
  selector: 'app-paperupload07',
  templateUrl: './paperupload07.component.html',
  styleUrls: ['./paperupload07.component.css']
})
export class Paperupload07Component implements OnInit {

  constructor(private paperServices : PaperService) { }

  ngOnInit(): void {
  }

  public uploadlink ={name:'',paperPath:''}

  sendData(){
    console.log(this.uploadlink)
    this.paperServices.uploadgrade07(this.uploadlink)
    alert('Upload sucess')

  }


}
