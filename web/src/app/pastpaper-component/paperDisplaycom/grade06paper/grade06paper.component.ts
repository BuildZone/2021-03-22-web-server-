import { Component, OnInit, EventEmitter } from "@angular/core";
import { PaperService } from "src/app/services/paper.service";
import { Pastpaper } from "src/app/models/pastpaper";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-grade06paper',
  templateUrl: './grade06paper.component.html',
  styleUrls: ['./grade06paper.component.css']
})
export class Grade06paperComponent implements OnInit {

  Pastpaper: [];

  public SelectPaper = new EventEmitter();

  constructor(
    private _router: Router,
    private route: ActivatedRoute,

    private paperServices: PaperService
  ) {}

  ngOnInit(): void {
    this.paperServices
      .getGrade06()
      .subscribe((data) => (this.Pastpaper = data));
  }

  onSelect(vid: Pastpaper) {
    this.SelectPaper.emit(vid);
  }

  deleteGrade06(_id: String) {
    this.paperServices.deleteGrade06(_id).subscribe((res: any) => {
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
