import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {Menu,MenuItem} from '../../models/menu.model';
import {MenuService} from '../../services/menu.service';

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

  constructor(private _menuService:MenuService) { 
        _menuService.getAllMenusWithMenuItems().subscribe(result=>{this.menuList=result},error=>{
          
        });
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
