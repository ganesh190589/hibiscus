import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeComponent } from './grade/grade.component';
import { GroupComponent } from './group/group.component';
import { DepartmentComponent } from './department/department.component';
import {JobtitleComponent} from './jobtitle/jobtitle.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [
    JobtitleComponent,
    GradeComponent,
    GroupComponent, 
    DepartmentComponent]
})
export class MasterModule { }
