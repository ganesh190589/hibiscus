import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {Menu,MenuItem} from '../../models/menu.model'

@Component({
  selector: 'app-admin',
  templateUrl: './admin-layout..component.html',
  styleUrls: ['./admin-layout.component.css',"../../../../../node_modules/admin-lte/dist/css/AdminLTE.min.css", 
  "../../../../../node_modules/admin-lte/dist/css/skins/_all-skins.min.css"]
})
export class AdminLayoutComponent implements OnInit {

  private isMiniSideBar:Boolean=false;
  private menuList:Menu[];
  
  @ViewChild("chessCanvas") chessCanvas: ElementRef; 

  constructor() { 
        this.menuList=[
          {Id:1,Name:"Master",Order:0,RoutePath:"master",MenuItems:[{Id:1,Name:"Job Title",Order:0,RoutePath:"master/jobtitle",MenuId:1},{Id:1,Name:"Grade",Order:0,RoutePath:"admin/grade",MenuId:1}]},
          {Id:2,Name:"Settings",Order:1,RoutePath:"admin/master",MenuItems:[{Id:1,Name:"Master",Order:0,RoutePath:"master",MenuId:2},{Id:1,Name:"Master",Order:0,RoutePath:"admin/master",MenuId:2}]},
          {Id:3,Name:"Dashboard",Order:1,RoutePath:"admin/master",MenuItems:[]}
        ];
    }

  ngOnInit() {

  }

  private  sideBarChange():void
  {
    this.isMiniSideBar=!this.isMiniSideBar;
  }
  private activeMenuChange():void
  {
  
  }

}
