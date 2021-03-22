import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/teachers";
  private _specialEventsUrl = "http://localhost:3000/api/special";
  private _eventPostUrl = "http://localhost:3000/api/teacher";

  constructor(private http : HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventsUrl)
  }

  getSpecialEvents(){
    return this.http.get<any>(this._specialEventsUrl)
  }

  postEvents(teacher){
    return this.http.post<any>(this._eventPostUrl,teacher)
  }


}
