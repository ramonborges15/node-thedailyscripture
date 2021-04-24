import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './administrativo/pages/home/home.component';
import { LoginCreateComponent } from './administrativo/pages/login-create/login-create.component';
import { LoginComponent } from './administrativo/pages/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },

  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "create",
    component: LoginCreateComponent
  },

  {
    path: "inicio",
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
