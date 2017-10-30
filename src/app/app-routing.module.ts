import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent} from './shared/layouts/admin/admin-layout.component';
import { DefaultLayoutComponent} from './shared/layouts/default/default-layout.component';

const routes: Routes = [
        { path: 'home',component:DefaultLayoutComponent, pathMatch: 'full' },
        { path: 'admin',component:AdminLayoutComponent ,pathMatch:'full',},
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
