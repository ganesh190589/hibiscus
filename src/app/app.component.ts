import { Component,OnInit,Input,Optional } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    
}
private breadCrumbs:string[];
private st:string;
// private breadCrumbs:string[];
ngOnInit()
{
this.breadCrumbs=[];
this.st="";

this.router.events.subscribe((val) => {
  this.breadCrumbs=['/'];
this.st=  val["url"].split("/").forEach((urlPath)=>{
  this.breadCrumbs.push(this.breadCrumbs.pop().trim()+urlPath)
});
console.log(this.breadCrumbs.join());
  // this.breadCrumbs .map(res=>{debugger;})
      });
}

}
