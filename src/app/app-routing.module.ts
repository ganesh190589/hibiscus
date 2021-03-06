import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent} from './shared/layouts/admin/admin-layout.component';
import { DefaultLayoutComponent} from './shared/layouts/default/default-layout.component';
import {admin_routes} from './shared/layouts/admin/admin-layout-routing.module';
import {SignInUpComponent} from './shared/components/sign-in-up/sign-in-up.component';


const routes: Routes = [
        { path: 'home',component:DefaultLayoutComponent, pathMatch: 'full' },
        { path: 'admin',component:AdminLayoutComponent},
        {path:'login',component:SignInUpComponent ,pathMatch:'full'},
        { path: '',component:AdminLayoutComponent,  children:admin_routes},
        { path: '',component:DefaultLayoutComponent},
        { path: '**', redirectTo: 'home' }
];

/**
 * App routing module
 */
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
