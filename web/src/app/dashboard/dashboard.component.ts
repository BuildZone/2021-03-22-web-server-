import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminService } from "../shared/admin.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {

  constructor(public _authService: AdminService,private router:Router) {}

  ngOnInit(): void {


  }

  logout() {
    this._authService.doLogout()
    this.router.navigateByUrl('/home');
  }
}
