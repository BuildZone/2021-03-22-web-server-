import { Component } from '@angular/core';
import { AuthService} from './auth.service';
import { HttpClient } from '@angular/common/http';
import { VideoMaster } from './video-master';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngApp';

  constructor(public _authservice : AuthService) {}

}
