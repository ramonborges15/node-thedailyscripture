import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCreateComponent } from './administrativo/pages/login-create/login-create.component';
import { LoginComponent } from './administrativo/pages/login/login.component';
import { UserFormComponent } from './administrativo/pages/user/user-form/user-form.component';
import { UserListComponent } from './administrativo/pages/user/user-list/user-list.component';
import { HomeComponent } from './shared/ui/home/home/home.component';

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
    path: "usuario/cadastrar",
    component: UserFormComponent
  },

  {
    path: "usuario",
    component: UserListComponent
  },

  {
    path: "usuario/editar/:id",
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
