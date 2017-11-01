import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {Menu,MenuItem} from '../../models/menu.model'

@Component({
  selector: 'app-admin',
  templateUrl: './admin-layout..component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  private isMiniSideBar:Boolean=false;
  private menuList:Menu[];
  
  @ViewChild("chessCanvas") chessCanvas: ElementRef; 

  constructor() { 
        this.menuList=[
          {id:1,name:"Master",order:0,routePath:"admin/master",menuItems:[{id:1,name:"Master",order:0,routePath:"admin/master",menuid:1},{id:1,name:"Master",order:0,routePath:"admin/master",menuid:1}]},
          {id:1,name:"Settings",order:1,routePath:"admin/master",menuItems:[{id:1,name:"Master",order:0,routePath:"admin/master",menuid:2},{id:1,name:"Master",order:0,routePath:"admin/master",menuid:2}]},
          {id:1,name:"Dashboard",order:1,routePath:"admin/master",menuItems:[]}
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
