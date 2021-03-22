import { Component, OnInit, OnDestroy, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";
import { FormGroup, FormControl } from "@angular/forms";
import { ProfileService } from "src/app/services/profile.service";
import { Profile } from "src/app/models/Profile";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-upload-files",
  templateUrl: "./upload-files.component.html",
  styleUrls: ["./upload-files.component.css"],
})
export class UploadFilesComponent implements OnInit {
  profiles: Profile[] = [];
  fileList;
  private profileSubscription: Subscription;
  private deleteprofilesEvent = new EventEmitter();
  form: FormGroup;
  profile: Profile;
  imageData: string;

  constructor(
    private profilesService: ProfileService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.profilesService.getProfiles();
    this.profileSubscription = this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
      });
  }

  deleteAds(_id: string) {
    this.profilesService.deleteAds(_id).subscribe((res: any) => {
      this.ngOnInit();

      alert("delete sucessfull");
      this.reload();
    });
  }
  reload() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = "reload";
    this._router.navigate(["./"], { relativeTo: this.route });
  }
}
