import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-layout..component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  private isMiniSideBar:Boolean=false;
  constructor() { }

  ngOnInit() {

  }

  private  sideBarChange ()
  {
    this.isMiniSideBar=!this.isMiniSideBar;
  }

}
