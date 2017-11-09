import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent} from '../../../admin/master/master.component';
import {AdminLayoutComponent} from './admin-layout.component';
import {master_routes} from '../../../admin/master/master-routing.module';
import {JobtitleComponent} from '../../../admin/master/jobtitle/jobtitle.component';
import { GradeComponent } from '../../../admin/master/grade/grade.component';
import { DepartmentComponent } from '../../../admin/master/department/department.component';
import { GroupComponent } from '../../../admin/master/group/group.component';


export const admin_routes: Routes = [  
                {path:'admin/master',component:MasterComponent},
                { path: 'admin/master/jobtitle',component:JobtitleComponent, pathMatch: 'full' },
                { path: 'admin/master/grade',component:GradeComponent ,pathMatch:'full',},
                { path:'admin/master/department',component:DepartmentComponent,pathMatch:'full'},
                { path: 'admin/master/group',component:GroupComponent}
            ];

