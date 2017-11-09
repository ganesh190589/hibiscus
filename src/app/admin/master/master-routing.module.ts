
import { Routes, RouterModule } from '@angular/router';
import { JobtitleComponent } from './jobtitle/jobtitle.component';
import { GradeComponent } from './grade/grade.component';
import { DepartmentComponent } from './department/department.component';

import { GroupComponent } from './group/group.component';


export const master_routes: Routes = [
  { path: 'jobtitle',component:JobtitleComponent, pathMatch: 'full' },
  { path: 'grade',component:GradeComponent ,pathMatch:'full',},
  { path:'department',component:DepartmentComponent,pathMatch:'full'},
  { path: 'group',component:GroupComponent}
];

