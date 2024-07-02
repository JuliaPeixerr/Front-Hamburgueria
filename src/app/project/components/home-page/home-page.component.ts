import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CarrinhoService } from "../../core";
import { AddItenCommand } from "../../core/domain/command/carrinho";
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
    private router: Router,
    private carrinhoService: CarrinhoService
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

  addItem(id: number) {
    var cmd = {
      codigoProduto: id
    } as AddItenCommand;

    this.carrinhoService.addItem(cmd).subscribe(result => {
      // show notification
      console.log(result);
    });
  }

  goInicio() {
    this.router.navigate([''], { skipLocationChange: true });
  }

  goCarrinho() {
    this.router.navigate(['/carrinho'], { skipLocationChange: true });
  }
}