import { Component, OnInit } from "@angular/core";
import { Produto } from "../../core/domain/models/produto";
import { GetAllProdutosQuery } from "../../core/domain/query/produto";
import { ProdutoService } from "../../core/services/produto";

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    produtos: Produto[] = [];
    
    constructor(
        private service: ProdutoService
    ) { }

    ngOnInit(): void {
        this.loadProdutos();
    }

    private loadProdutos() {
        var query = {
            descricao: ''
        } as GetAllProdutosQuery;

        this.service.getAll(query).subscribe(result => {
            this.produtos = result;
        });
    }
}