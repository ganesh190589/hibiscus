import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {AdminLayoutComponent} from './admin-layout.component';
// // Should remove later
// import {DefaultLayoutComponent} from '../default/default-layout.component';
import {AdminModule} from '../../../admin/admin.module';

@NgModule({
  imports: [
    CommonModule,AdminModule
  ],
  declarations: []
  
})
export class AdminLayoutModule { }
