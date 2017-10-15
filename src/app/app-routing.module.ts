import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent} from './shared/layouts/admin/admin-layout.component';

const routes: Routes = [
    { path: '',component:AdminLayoutComponent, pathMatch: 'full' },
    { path: 'home',component:AdminLayoutComponent, pathMatch: 'full' },
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
