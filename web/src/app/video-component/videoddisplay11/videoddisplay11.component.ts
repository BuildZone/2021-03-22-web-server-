import { Component, OnInit, EventEmitter } from "@angular/core";
import { Video } from "src/app/video";
import { Router, ActivatedRoute } from "@angular/router";

import { VideoService } from "src/app/services/video.service";

@Component({
  selector: "app-videoddisplay11",
  templateUrl: "./videoddisplay11.component.html",
  styleUrls: ["./videoddisplay11.component.css"],
})
export class Videoddisplay11Component implements OnInit {
  videos: [];

  public SelectVideo = new EventEmitter();

  constructor(
    private _router: Router,
    private route: ActivatedRoute,

    private _videoService: VideoService
  ) {}

  ngOnInit(): void {
    this._videoService.getVideos11().subscribe((data) => (this.videos = data));
    console.log("videos array", this.videos);
  }

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }

  deleteVideo(_id: String) {
    this._videoService.deleteVideo11(_id).subscribe((res: any) => {
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
