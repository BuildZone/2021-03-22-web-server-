import { Component, OnInit, OnDestroy,ViewChild } from "@angular/core";
import { Subscription } from "rxjs";

import { ProfileService } from "src/app/services/profile.service";
import { Profile } from "src/app/models/Profile";



import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: "app-all-profiles",
  templateUrl: "./all-profiles.component.html",
  styleUrls: ["./all-profiles.component.css"],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class AllProfilesComponent implements OnInit, OnDestroy {
  profiles: Profile[] = [];
  current = 0;
  private profileSubscription: Subscription;
data:any;
  constructor(private profilesService: ProfileService) {}

  ngOnInit(): void {
    this.profilesService.getProfiles();
    this.profileSubscription = this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
      });

      setInterval(() => {
        this.current = ++this.current % this.profiles.length;
      }, 2000);
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }


}


