import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from './app';
import { Register } from './register/register';
import { Main } from './main/main';
import { LoginComponent } from './login/login';

const routes: Routes = [
  { path: '', component: Main},
  { path: 'register', component: Register },
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
