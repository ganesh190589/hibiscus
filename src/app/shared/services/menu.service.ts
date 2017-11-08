import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import{Menu,MenuItem} from '../models/menu.model';
import {AppSettings} from '../../app-settings';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class MenuService {

  constructor(private _http:Http,private _appSettings:AppSettings) { }
    getAllMenusWithMenuItems(): Observable<Menu[]>{
      debugger;
      return this._http.get("https://cors-anywhere.herokuapp.com/https://github.com/ganesh190589/hibiscus/blob/master/tsconfig.json")
          .map((res) => res.json())
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  
  }

}
