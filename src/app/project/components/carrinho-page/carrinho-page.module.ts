import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CarrinhoPageComponent } from "./carrinho-page.component";

@NgModule({
    declarations: [
        CarrinhoPageComponent
    ],
    exports: [
        CarrinhoPageComponent
    ],
    imports: [
        CommonModule,
        
    ]
})
export class CarrinhoPageComponentModule { }