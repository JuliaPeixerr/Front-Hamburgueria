import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HomePageComponent } from "./home-page.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutoServiceModule } from "../../core/services/produto";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { CarrinhoPageComponentModule } from "../carrinho-page";
import { CarrinhoServiceModule } from "../../core";

@NgModule({
    declarations: [
        HomePageComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ProdutoServiceModule,
        MatIconModule,
        RouterModule,
        CarrinhoPageComponentModule,
        CarrinhoServiceModule
    ]
})
export class HomePageComponentModule { }