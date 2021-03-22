import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Pastpaper } from "../models/PastPaper";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaperService {
  private pastpapers: Pastpaper[] = [];
  private pastpapers$ = new Subject< Pastpaper []>();
  readonly url = "http://localhost:3000/api/pastpapers";

  constructor(private http: HttpClient,) {}

  getPastPapers() {
    this.http
      .get<{ pastpapers: Pastpaper [] }>(this.url)
      .pipe(
        map((pastpaperData) => {
          return pastpaperData.pastpapers;
        })
      )
      .subscribe((pastpapers) => {
        this.pastpapers = pastpapers;
        this.pastpapers$.next(this.pastpapers);
      });
  }

  getPastpaperStream() {
    return this.pastpapers$.asObservable();
  }

  addPastpaper(name: string, pastpaper: Blob): void {
    const pastpaperData = new FormData();
    pastpaperData.append("name", name);
    pastpaperData.append("pastpaper", pastpaper, name);
    this.http
      .post<{ pastpaper: Pastpaper }>(this.url, pastpaperData)
      .subscribe((pastpaperData) => {
        const pastpaper: Pastpaper = {
          _id: pastpaperData.pastpaper._id,
          name: name,

          paperPath: pastpaperData.pastpaper.paperPath
        };
        this.pastpapers.push(pastpaper);
        this.pastpapers$.next(this.pastpapers);
      });

}

private _getUrl = 'http://localhost:3000/api/pastpapers/';
private deleteurl  = 'http://localhost:3000/papers/papersdelete/';


getPapers(){
  return this.http.get<any>(this._getUrl);
}


deletePaper(_id :any){

  return this.http.delete<any>(this.deleteurl + _id )
}

uploadgrade06(uploadlink6){//grade 06 video
  this.http.post('http://localhost:3000/papers/uploadgrade06',uploadlink6).subscribe(res=>{
        console.log(res)
      })

 }
 uploadgrade07(uploadlink7){//grade 07 video link upload
  this.http.post('http://localhost:3000/papers/uploadgrade07',uploadlink7).subscribe(res=>{
        console.log(res)
      })

 }
 uploadgrade08(uploadlink8){//grade 08 video link upload
  this.http.post('http://localhost:3000/papers/uploadgrade08',uploadlink8).subscribe(res=>{
        console.log(res)
      })

 }
 uploadgrade09(uploadlink9){//grade 09 video link upload
  this.http.post('http://localhost:3000/papers/uploadgrade09',uploadlink9).subscribe(res=>{
        console.log(res)
      })

 }
 uploadgrade10(uploadlink10){//grade 10 video link upload
  this.http.post('http://localhost:3000/papers/uploadgrade10',uploadlink10).subscribe(res=>{
        console.log(res)
      })

 }
 uploadgrade11(uploadlink11){//grade 11 video link upload
  this.http.post('http://localhost:3000/papers/uploadgrade11',uploadlink11).subscribe(res=>{
        console.log(res)
      })

 }

 apiEndPoint  = 'http://localhost:3000/papers/';
 getLinks(){
  return this.http.get(this.apiEndPoint+'/grade06');
 }
 getLinks07(){
  return this.http.get(this.apiEndPoint+'/grade07');
 }

 getLinks8(){
  return this.http.get(this.apiEndPoint+'/grade08');
 }
 getLinks9(){
  return this.http.get(this.apiEndPoint+'/grade09');
 }
 getLinks10(){
  return this.http.get(this.apiEndPoint+'/grade10');
 }
 getLinks11(){
  return this.http.get(this.apiEndPoint+'/grade11');
 }

 private _putUrl06 = 'http://localhost:3000/papers/grade06/';


 getGrade06(){
   return this.http.get<any>(this._putUrl06);
 }
 private _getUrl06 = 'http://localhost:3000/papers/grade06/';

 private _putUrl7 = 'http://localhost:3000/papers/grade07/';
 getGrade07(){
  return this.http.get<any>(this._putUrl7);
}
private _putUrl8 = 'http://localhost:3000/papers/grade08/';
 getGrade08(){
  return this.http.get<any>(this._putUrl8);
}
private _putUrl9 = 'http://localhost:3000/papers/grade09/';
 getGrade09(){
  return this.http.get<any>(this._putUrl9);
}
private _putUrl10 = 'http://localhost:3000/papers/grade10/';
 getGrade10(){
  return this.http.get<any>(this._putUrl10);
}
private _putUrl11 = 'http://localhost:3000/papers/grade11/';
 getGrade11(){
  return this.http.get<any>(this._putUrl11);
}
//private _getUrl = 'http://localhost:3000/api/tasks07/';
deleteGrade06(_id :any){

 return this.http.delete<any>(this._putUrl06 + _id )
}
private _putUrlD = 'http://localhost:3000/video/tasks7/';
deleteGrade07(_id :any){

  return this.http.delete<any>(this._putUrl7 + _id )
 }

 deleteGrade08(_id :any){

  return this.http.delete<any>(this._putUrl8 + _id )
 }
 deleteGrade09(_id :any){

  return this.http.delete<any>(this._putUrl9 + _id )
 }
 deleteGrade10(_id :any){

  return this.http.delete<any>(this._putUrl10 + _id )
 }
 deleteGrade11(_id :any){

  return this.http.delete<any>(this._putUrl11 + _id )
 }


}
