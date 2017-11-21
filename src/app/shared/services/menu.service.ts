import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import {AppSettings} from '../../app-settings';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import{Menu,MenuItem} from '../models/menu.model';


@Injectable()
export class MenuService {

  constructor(private _http:Http,private _appSettings:AppSettings) { }
    getAllMenusWithMenuItems(): Observable<Menu[]>{
      debugger;
      return this._http.get(this._appSettings.apiUrl)
          .map((res) => {debugger;res.json()})
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  
  }

}
