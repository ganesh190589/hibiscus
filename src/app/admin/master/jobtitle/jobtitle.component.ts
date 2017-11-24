
import { Component, ViewChild,TemplateRef  } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import {AppSettings} from '../../../app-settings'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-jobtitle',
  templateUrl: './jobtitle.component.html',
  styleUrls: ['./jobtitle.component.css']
})
export class JobtitleComponent {
private   modalRef: BsModalRef;
  constructor(public _appSettings:AppSettings,private modalService: BsModalService) {
    this.source = new LocalDataSource(this.data);
  }
  jobtitles = [{ "id": 1, "name": "One", "code": "dsds" },
   { "id": 2, "name": "One", "code": "dsds" }, 
   { "id": 3, "name": "One", "code": "dsds" }, 
   { "id": 4, "name": "One", "code": "dsds" }]
  settings = {
    mode:"external",
 
   
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
    ,actions:{position:"right",
    edit: false,
    custom:[{ name: 'Edit', title: `<i  class="fa fa-edit"></i>` }
  
  ],
  }
    ,hideSubHeader:true
   
  };
alertfn(event)
{
  
  debugger;
}
  data = [
    // ... our data here
  ];

  source: LocalDataSource;

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

  

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
   
    openModalWithClass(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(
        template,
        Object.assign({}, this._appSettings.modalConfig , { class: 'gray modal-lg' })
      );
    }
}
