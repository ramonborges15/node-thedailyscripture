import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { ButtonModule } from './ui/button/button.module';
import { ContentModule } from './ui/content/content.module';
import { HeaderModule } from './ui/header/header.module';
import { InputChipsModule } from './ui/input-chips/input-chips.module';
import { InputModule } from './ui/input/input.module';
import { SideMenuModule } from './ui/side-menu/side-menu.module';



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
    InputChipsModule,
    InputModule,
    ButtonModule,
    SideMenuModule
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
    InputChipsModule,
    InputModule,
    ButtonModule,
    SideMenuModule
  ]
})
export class SharedModule { }
