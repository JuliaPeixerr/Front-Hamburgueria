import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoPageComponentModule } from './project/components';
import { HomePageComponentModule } from './project/components/home-page';
import { ProdutoServiceModule } from './project/core/services/produto';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutoServiceModule,
    HttpClientModule,
    HomePageComponentModule,
    RouterModule,
    CarrinhoPageComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
