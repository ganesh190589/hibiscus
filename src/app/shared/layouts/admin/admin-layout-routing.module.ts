import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent} from '../../../admin/master/master.component';
import {AdminLayoutComponent} from './admin-layout.component';
import {master_routes} from '../../../admin/master/master-routing.module';


export const admin_routes: Routes = [  
                {path:'admin/master',component:MasterComponent},
                {path:'',component:MasterComponent,children:master_routes}
            ];

