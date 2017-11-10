import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { DefaultLayoutComponent } from './shared/layouts/default/default-layout.component';
import { AdminLayoutComponent } from './shared/layouts/admin/admin-layout.component';
import { TreeComponent } from './shared/components/tree/tree.component';
import { MasterComponent} from './admin/master/master.component';
import {MenuService} from './shared/services/menu.service';
import {AppSettings} from '../app/app-settings';
import {MasterModule} from '../app/admin/master/master.module';
import {AdminLayoutModule} from './shared/layouts/admin/admin-layout.module';


@NgModule({
  declarations: [
        AppComponent,
    HomeComponent,
    DefaultLayoutComponent,
    AdminLayoutComponent,
    TreeComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpModule,MasterModule,AdminLayoutModule
  ],
  providers: [MenuService,AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
