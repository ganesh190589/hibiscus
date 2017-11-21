import { NgModule } from '@angular/core';
import {JobtitleAddComponent} from './jobtitle-add.component';
import {JobtitleComponent} from './jobtitle.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  imports: [
    Ng2SmartTableModule
  ],
  declarations: [
    JobtitleAddComponent,
    JobtitleComponent]
})
export class JobtitleModule { }
