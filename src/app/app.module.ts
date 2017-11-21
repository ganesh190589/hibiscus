import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PluginImportsModule} from './shared/module/plugin-imports.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { DefaultLayoutComponent } from './shared/layouts/default/default-layout.component';
import { AdminLayoutComponent } from './shared/layouts/admin/admin-layout.component';
import { TreeComponent } from './shared/components/tree/tree.component';
import { MasterComponent} from './admin/master/master.component';
import {MenuService} from './shared/services/menu.service';
import {AppSettings} from '../app/app-settings';
import {MasterModule} from '../app/admin/master/master.module';
import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';


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
    PluginImportsModule,BrowserModule,CommonModule,Ng2SmartTableModule, SharedModule,AdminModule,MasterModule,AppRoutingModule
  ],
  providers: [MenuService,AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
