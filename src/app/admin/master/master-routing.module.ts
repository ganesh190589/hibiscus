import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobtitleComponent } from './jobtitle/jobtitle.component';
import { DepartmentComponent } from './department/department.component';
import { GradeComponent } from './grade/grade.component';
import { GroupComponent } from './group/group.component';


const routes: Routes = [
  { path: 'jobtitle',component:JobtitleComponent, pathMatch: 'full' },
  { path: 'grade',component:GradeComponent ,pathMatch:'full',},
  {path:'department',component:DepartmentComponent,pathMatch:'full'},
  { path: 'group',component:GroupComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { 

}
