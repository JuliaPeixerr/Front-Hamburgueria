import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'carrinho-page',
    templateUrl: './carrinho-page.component.html',
    styleUrls: ['./carrinho-page.component.scss']
})
export class CarrinhoPageComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    
    }

    goInicio() {
        this.router.navigate([''], { skipLocationChange: true });
    }
  
    goCarrinho() {
      this.router.navigate(['/carrinho'], { skipLocationChange: true });
    }
}