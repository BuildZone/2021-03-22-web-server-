import { Component, OnInit, EventEmitter } from "@angular/core";
import { PaperService } from "src/app/services/paper.service";
import { Pastpaper } from "src/app/models/pastpaper";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-grade11paper",
  templateUrl: "./grade11paper.component.html",
  styleUrls: ["./grade11paper.component.css"],
})
export class Grade11paperComponent implements OnInit {
  Pastpaper: [];

  public SelectVideo = new EventEmitter();

  constructor(
    private _router: Router,
    private route: ActivatedRoute,

    private paperServices: PaperService
  ) {}

  ngOnInit(): void {
    this.paperServices
      .getGrade11()
      .subscribe((data) => (this.Pastpaper = data));
  }

  onSelect(vid: Pastpaper) {
    this.SelectVideo.emit(vid);
  }

  deleteGrade11(_id: String) {
    this.paperServices.deleteGrade11(_id).subscribe((res: any) => {
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
