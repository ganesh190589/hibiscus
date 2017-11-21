import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, MenuItem } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-layout..component.html',
  styleUrls: ['./admin-layout.component.css'

  ]
})
export class AdminLayoutComponent implements OnInit {

  private isMiniSideBar: Boolean = false;
  private menuList: Menu[];

  @ViewChild("chessCanvas") chessCanvas: ElementRef;

  constructor(private _menuService: MenuService, private router: Router) {
    // _menuService.getAllMenusWithMenuItems().subscribe(result=>{
    //   debugger;
    //   this.menuList=result},error=>{
    //   debugger;
    // });
    this.menuList = [
      {
        "MenuId": 3,
        "Name": "Home",
        "Order": 1,
        "RoutePath": "/home",
        "MenuItems": []
      },
      {
        "MenuId": 1,
        "Name": "Master",
        "Order": 0,
        "RoutePath": "/admin/master",
        "MenuItems": [
          {
            "MenuItemId": 1,
            "Name": "Job Title",
            "Order": 0,
            "RoutePath": "/master/jobtitle",
            "MenuId": 1,
            "Position": 2
          },
          {
            "MenuItemId": 1,
            "Name": "Grade",
            "Order": 0,
            "RoutePath": "/master/grade",
            "MenuId": 2,
            "Position": 2
          },
          {
            "MenuItemId": 1,
            "Name": "Grade",
            "Order": 0,
            "RoutePath": "/master/department",
            "MenuId": 2,
            "Position": 2
          },
          {
            "MenuItemId": 1,
            "Name": "Grade",
            "Order": 0,
            "RoutePath": "/master/group",
            "MenuId": 2,
            "Position": 2
          }
        ]
      },
      {
        "MenuId": 2,
        "Name": "Settings",
        "Order": 1,
        "RoutePath": "/admin/settings",
        "MenuItems": []
      },
      {
        "MenuId": 3,
        "Name": "Dashboard",
        "Order": 1,
        "RoutePath": "/admin/master",
        "MenuItems": []
      }
    ]
  }

  private breadCrumbs: string[];
  private st: string;
  // private breadCrumbs:string[];
  ngOnInit() {
    debugger;
    this.breadCrumbs = [];
    this.st = "";

    this.router.events.subscribe((val) => {
      debugger;
      this.breadCrumbs = [];
      var temp = "";
      val["url"].split("/").forEach((urlPath) => {
        if (urlPath != "") {
          temp += '/' + urlPath;
          this.breadCrumbs.push(urlPath);
        }
      });

      // this.breadCrumbs .map(res=>{debugger;})
    });
  }

  private sideBarChange(): void {
    this.isMiniSideBar = !this.isMiniSideBar;
  }
  private activeMenuChange(): void {

  }

}
