import { Component, OnInit, EventEmitter } from "@angular/core";
import { VideoService } from "src/app/services/video.service";
import { Video } from "src/app/video";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-videoddisplay8",
  templateUrl: "./videoddisplay8.component.html",
  styleUrls: ["./videoddisplay8.component.css"],
})
export class Videoddisplay8Component implements OnInit {
  videos: [];
  video;
  showMainContent: Boolean = false;

  public SelectVideo = new EventEmitter();

  constructor(
    private _videoService: VideoService,
    private _router: Router,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this._videoService.getVideos8().subscribe((data) => (this.videos = data));
    console.log("videos array", this.videos);
  }

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }

  deleteVideo(_id: String) {
    this._videoService.deleteVideo8(_id).subscribe((res: any) => {
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
