import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { PaperService } from 'src/app/services/paper.service';

import { Pastpaper } from "src/app/models/Pastpaper";
import { AuthService } from 'src/app/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pastpaper-list',
  templateUrl: './pastpaper-list.component.html',
  styleUrls: ['./pastpaper-list.component.css'],
  inputs:['pastpapers'],
  outputs:['SelectPastpaper']
})
export class PastpaperListComponent implements OnInit {
  pastpapers :[];
  pastpaper;
  tabIndex = 6 ;

  public SelectPastpaper = new EventEmitter();
  constructor(public _authservice : AuthService,private PaperService:PaperService, private _router: Router,private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.PaperService.getPapers().subscribe((res: any) => {
      this.pastpaper = res.data;
    });
  }
  onSelect(vid :Pastpaper){
    this.SelectPastpaper.emit(vid)

  }
  onTabClick(index){
    this.tabIndex = index;
}
deletePaper(_id:string){
  this.PaperService.deletePaper(_id).subscribe((res: any) => {
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
