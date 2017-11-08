
import { Routes, RouterModule } from '@angular/router';
import { JobtitleComponent } from './jobtitle/jobtitle.component';
import { DepartmentComponent } from './department/department.component';
import { GradeComponent } from './grade/grade.component';
import { GroupComponent } from './group/group.component';


export const master_routes: Routes = [
  { path: 'master/jobtitle',component:JobtitleComponent, pathMatch: 'full' },
  { path: 'master/grade',component:GradeComponent ,pathMatch:'full',},
  { path:'master/department',component:DepartmentComponent,pathMatch:'full'},
  { path: 'master/group',component:GroupComponent}];

