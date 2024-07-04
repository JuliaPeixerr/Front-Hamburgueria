import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoPageComponent, HomePageComponent } from './project/components';
import { LoginPageComponent } from './project/components/login-page';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'carrinho', component: CarrinhoPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
