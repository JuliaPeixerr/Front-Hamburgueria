import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
    private service: ProdutoService,
    private router: Router
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

  goInicio() {
    this.router.navigate([''], { skipLocationChange: true });
  }

  goCarrinho() {
    this.router.navigate(['/carrinho'], { skipLocationChange: true });
  }
}