import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../shared/models/menu.model'

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  private masterCategories:MenuItem[];
  constructor() { 
    this.masterCategories= [
      {
          MenuItemId: 1,
          Name: "Job Title",
          Order: 0,
          RoutePath: "/master/jobtitle",
          "MenuId": 1,
          "Position":2
      },
      {
          "MenuItemId": 1,
          "Name": "Grade",
          "Order": 0,
          RoutePath: "/master/grade",
          "MenuId": 2,
          "Position":2
      },
      {
          "MenuItemId": 1,
          "Name": "Grade",
          "Order": 0,
          RoutePath: "/master/department",
          "MenuId": 2,
          "Position":2
      },
      {
          "MenuItemId": 1,
          "Name": "Grade",
          "Order": 0,
          RoutePath: "/master/group",
          "MenuId": 2,
          "Position":2
      }
  ];
  }

  ngOnInit() {
  }

}
