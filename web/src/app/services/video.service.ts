import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
import { Upload } from "../models/upload";
import { Subject } from "rxjs";
import { Video } from '../video';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private upload: Upload[] = [];
  private upload$ = new Subject<Upload[]>();
  readonly url = "http://localhost:3000/api/upload";

  constructor(private http: HttpClient) {}

  getupload() {
    this.http
      .get<{ upload: Upload[] }>(this.url)
      .pipe(
        map((uploadData) => {
          return uploadData.upload;
        })
      )
      .subscribe((upload) => {
        this.upload = upload;
        this.upload$.next(this.upload);
      });
  }

  getUploadStream() {
    return this.upload$.asObservable();
  }

  addProfile(subjectname:string ,name: string, video: Blob,teachername:string,insertgrade:string): void {     /////////////////
    const uploadData = new FormData();
    uploadData.append("subjectname", subjectname);
    uploadData.append("name", name);
    uploadData.append("video", video, name);
    uploadData.append("teachername",teachername );
    uploadData.append("insertgrade",insertgrade );
    this.http
      .post<{ upload: Upload }>(this.url, uploadData)
      .subscribe((uploadData) => {
        const upload: Upload = {
          _id: uploadData.upload._id,
          subjectname:name,
          name: name,
          teachername:name,
          insertgrade:name,
          videoPath: uploadData.upload.videoPath,

        };
        this.upload.push(upload);
        this.upload$.next(this.upload);
      });
  }

  private _getUrl = 'http://localhost:3000/video/uploads/';

 // apiEndPoint  = 'http://localhost:3000';

getVideos(){
  return this.http.get<any>(this._getUrl);
}

deleteVideo(_id :any){

  return this.http.delete<any>(this._getUrl + _id )
}


uploadLink(uploadlink){//grade 06 video
  this.http.post('http://localhost:3000/video/uploadlink',uploadlink).subscribe(res=>{
        console.log(res)
      })

 }
 uploadLink07(uploadlink07){//grade 07 video link upload
  this.http.post('http://localhost:3000/video/uploadlink07',uploadlink07).subscribe(res=>{
        console.log(res)
      })

 }
 uploadLink8(uploadlink8){//grade 08 video link upload
  this.http.post('http://localhost:3000/video/uploadlink8',uploadlink8).subscribe(res=>{
        console.log(res)
      })

 }
 uploadLink9(uploadlink9){//grade 09 video link upload
  this.http.post('http://localhost:3000/video/uploadlink9',uploadlink9).subscribe(res=>{
        console.log(res)
      })

 }
 uploadLink10(uploadlink10){//grade 10 video link upload
  this.http.post('http://localhost:3000/video/uploadlink10',uploadlink10).subscribe(res=>{
        console.log(res)
      })

 }
 uploadLink11(uploadlink11){//grade 11 video link upload
  this.http.post('http://localhost:3000/video/uploadlink11',uploadlink11).subscribe(res=>{
        console.log(res)
      })

 }

 apiEndPoint  = 'http://localhost:3000/video/';
 getLinks(){
  return this.http.get(this.apiEndPoint+'/tasks');
 }
 getLinks07(){
  return this.http.get(this.apiEndPoint+'/tasks07');
 }

 getLinks8(){
  return this.http.get(this.apiEndPoint+'/tasks8');
 }
 getLinks9(){
  return this.http.get(this.apiEndPoint+'/tasks9');
 }
 getLinks10(){
  return this.http.get(this.apiEndPoint+'/tasks10');
 }
 getLinks11(){
  return this.http.get(this.apiEndPoint+'/tasks11');
 }

 private _putUrl = 'http://localhost:3000/video/tasks/';


 getVideos06(){
   return this.http.get<any>(this._putUrl);
 }
 private _getUrl06 = 'http://localhost:3000/video/tasks/';

 private _putUrl7 = 'http://localhost:3000/video/tasks07/';
 getVideos07(){
  return this.http.get<any>(this._putUrl7);
}
private _putUrl8 = 'http://localhost:3000/video/tasks8/';
 getVideos8(){
  return this.http.get<any>(this._putUrl8);
}
private _putUrl9 = 'http://localhost:3000/video/tasks9/';
 getVideos9(){
  return this.http.get<any>(this._putUrl9);
}
private _putUrl10 = 'http://localhost:3000/video/tasks10/';
 getVideos10(){
  return this.http.get<any>(this._putUrl10);
}
private _putUrl11 = 'http://localhost:3000/video/tasks11/';
 getVideos11(){
  return this.http.get<any>(this._putUrl11);
}
//private _getUrl = 'http://localhost:3000/api/tasks07/';
deleteVideo06(_id :any){

 return this.http.delete<any>(this._getUrl06 + _id )
}
private _putUrlD = 'http://localhost:3000/video/tasks7/';
deleteVideo7(_id :any){

  return this.http.delete<any>(this._putUrlD + _id )
 }

 deleteVideo8(_id :any){

  return this.http.delete<any>(this._putUrl8 + _id )
 }
 deleteVideo9(_id :any){

  return this.http.delete<any>(this._putUrl9 + _id )
 }
 deleteVideo10(_id :any){

  return this.http.delete<any>(this._putUrl10 + _id )
 }
 deleteVideo11(_id :any){

  return this.http.delete<any>(this._putUrl11 + _id )
 }

}
