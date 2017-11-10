import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterModule} from './master/master.module';
import {SettingsModule} from './settings/settings.module';
@NgModule({
  imports: [
    CommonModule,MasterModule,SettingsModule
  ],
  declarations: []
})
export class AdminModule { }
