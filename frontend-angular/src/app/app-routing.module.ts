import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './administrativo/pages/user/user-form/user-form.component';
import { UserListComponent } from './administrativo/pages/user/user-list/user-list.component';
import { HomeComponent } from './shared/ui/home/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
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
