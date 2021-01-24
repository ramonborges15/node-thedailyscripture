import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { UserListComponent } from './components/user/user-list/user-list.component';

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
