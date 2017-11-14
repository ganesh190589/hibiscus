import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminLayoutModule} from '../shared/layouts/admin/admin-layout.module';
import { SignupComponent } from '../shared/components/signup/signup.component';
import { SigninComponent } from '../shared/components/signin/signin.component';
import { SignInUpComponent } from '../shared/components/sign-in-up/sign-in-up.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SignupComponent,SigninComponent,SignInUpComponent]
})
export class SharedModule { }
