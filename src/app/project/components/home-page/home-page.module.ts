import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HomePageComponent } from "./home-page.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutoServiceModule } from "../../core/services/produto";

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
        ProdutoServiceModule
    ]
})
export class HomePageComponentModule { }