
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { BsDropdownModule,ModalModule  } from 'ngx-bootstrap';



@NgModule({
  declarations: [
      
  ],
  imports: [
    HttpModule,BsDropdownModule,ModalModule.forRoot()
  ],
  providers: [],
  
})
export class PluginImportsModule { }
