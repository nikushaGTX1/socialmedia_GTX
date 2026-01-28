import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from './app';
import { Register } from './register/register';
import { Main } from './main/main';

const routes: Routes = [
  { path: '', component: Main},
  { path: 'register', component: Register },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
