import { Component, OnInit, EventEmitter } from "@angular/core";
import { VideoService } from "src/app/services/video.service";
import { Video } from "src/app/video";
import { Router, ActivatedRoute } from "@angular/router";

import { AuthService } from "src/app/auth.service";
@Component({
  selector: "app-videodislpay07",
  templateUrl: "./videodislpay07.component.html",
  styleUrls: ["./videodislpay07.component.css"],
})
export class Videodislpay07Component implements OnInit {
  videos: [];

  public SelectVideo = new EventEmitter();

  constructor(
    private _videoService: VideoService,
    public _authservice: AuthService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._videoService.getVideos07().subscribe((data) => (this.videos = data));
    console.log("videos array", this.videos);
  }

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }

  deleteVideo7(_id: String) {
    this._videoService.deleteVideo7(_id).subscribe((res: any) => {
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
