import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginCreateComponent } from './pages/login-create/login-create.component';
import { LoginComponent } from './pages/login/login.component';
import { GeneralContentComponent } from './pages/general-content/general-content.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginCreateComponent,
    HomeComponent,
    GeneralContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    LoginComponent,
    LoginCreateComponent,
    HomeComponent,
    GeneralContentComponent
  ]
})
export class AdministrativoModule { }
