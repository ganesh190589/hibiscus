
import { Component, ViewChild } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-jobtitle',
  templateUrl: './jobtitle.component.html',
  styleUrls: ['./jobtitle.component.css']
})
export class JobtitleComponent {
  jobtitles = [{ "id": 1, "name": "One", "code": "dsds" },
   { "id": 2, "name": "One", "code": "dsds" }, 
   { "id": 3, "name": "One", "code": "dsds" }, 
   { "id": 4, "name": "One", "code": "dsds" }]
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Name',
        filter: false
      },
      username: {
        title: 'Code',
        filter: false
      }
    }
    ,actions:{position:"right"}
  };

  data = [
    // ... our data here
  ];

  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'code',
        search: query
      }
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
}
