import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeComponent } from './grade/grade.component';
import { GroupComponent } from './group/group.component';
import { DepartmentComponent } from './department/department.component';
import {JobtitleModule} from './jobtitle/jobtitle.module';


@NgModule({
  imports: [
    CommonModule,
    JobtitleModule
  ],
  declarations: [
    GradeComponent,
    GroupComponent, 
    DepartmentComponent]
})
export class MasterModule { }
