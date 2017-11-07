import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { DefaultLayoutComponent } from './shared/layouts/default/default-layout.component';
import { AdminLayoutComponent } from './shared/layouts/admin/admin-layout.component';
import { TreeComponent } from './shared/components/tree/tree.component';
import { MasterComponent} from './admin/master/master.component';


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
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
