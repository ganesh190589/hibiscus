
import { Routes, RouterModule } from '@angular/router';
import { JobtitleComponent } from './jobtitle/jobtitle.component';
import { GradeComponent } from './grade/grade.component';
import { DepartmentComponent } from './department/department.component';

import { GroupComponent } from './group/group.component';


export const master_routes: Routes = [
  // { path: 'admin/master/jobtitle',component:JobtitleComponent, pathMatch: 'full' },
  { path: 'admin/master/grade',component:GradeComponent ,pathMatch:'full',},
  { path:'admin/master/department',component:DepartmentComponent,pathMatch:'full'},
  { path: 'admin/master/group',component:GroupComponent}
];

