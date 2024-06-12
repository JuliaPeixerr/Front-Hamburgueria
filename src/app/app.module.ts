import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    HomePageComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
