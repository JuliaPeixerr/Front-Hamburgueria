import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { CarrinhoPageComponent } from "./carrinho-page.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrinhoServiceModule } from "../../core";
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        CarrinhoPageComponent
    ],
    exports: [
        CarrinhoPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        RouterModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        BrowserModule,
        CarrinhoServiceModule,
        ToastrModule.forRoot(),
    ]
})
export class CarrinhoPageComponentModule { }