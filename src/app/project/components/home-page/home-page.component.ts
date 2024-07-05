import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
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
    private carrinhoService: CarrinhoService,
    private notification: ToastrService
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

    this.carrinhoService.addItem(cmd).subscribe(() => {
      this.router.navigate(['/carrinho'], { skipLocationChange: true });
      this.notification.success('Item adicionado ao carrinho');
    });
  }

  goInicio() {
    this.router.navigate(['home'], { skipLocationChange: true });
  }

  goCarrinho() {
    this.router.navigate(['/carrinho'], { skipLocationChange: true });
  }
}