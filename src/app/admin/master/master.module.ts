import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobtitleComponent } from './jobtitle/jobtitle.component';
import { GradeComponent } from './grade/grade.component';
import { GroupComponent } from './group/group.component';
import { DepartmentComponent } from './department/department.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    
    JobtitleComponent,
    GradeComponent,
    GroupComponent, 
    DepartmentComponent]
})
export class MasterModule { }
