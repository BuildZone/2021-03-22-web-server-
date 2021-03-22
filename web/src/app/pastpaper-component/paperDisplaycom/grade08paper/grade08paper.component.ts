import { Component, OnInit, EventEmitter } from "@angular/core";
import { PaperService } from "src/app/services/paper.service";
import { Pastpaper } from "src/app/models/pastpaper";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-grade08paper',
  templateUrl: './grade08paper.component.html',
  styleUrls: ['./grade08paper.component.css']
})
export class Grade08paperComponent implements OnInit {

  Pastpaper: [];

  public SelectPaper = new EventEmitter();
  constructor(
    private _router: Router,
    private route: ActivatedRoute,

    private paperServices: PaperService
  ) {}

  ngOnInit(): void {
    this.paperServices
      .getGrade08()
      .subscribe((data) => (this.Pastpaper = data));
  }

  onSelect(vid: Pastpaper) {
    this.SelectPaper.emit(vid);
  }

  deleteGrade08(_id: String) {
    this.paperServices.deleteGrade08(_id).subscribe((res: any) => {
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
