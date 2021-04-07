import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from '../administrativo/pages/login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContentModule } from './ui/content/content.module';
import { HeaderModule } from './ui/header/header.module';
import { HomeModule } from './ui/home/home.module';
import { InputChipsModule } from './ui/input-chips/input-chips.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    ContentModule,
    HeaderModule,
    HomeModule,
    InputChipsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    ContentModule,
    HeaderModule,
    HomeModule,
    InputChipsModule,
  ]
})
export class SharedModule { }
