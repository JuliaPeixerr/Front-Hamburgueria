import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ItemProdutoDto } from "../../core";
import { CarrinhoService } from "../../core/services/carrinho/carrinho.service";

@Component({
    selector: 'carrinho-page',
    templateUrl: './carrinho-page.component.html',
    styleUrls: ['./carrinho-page.component.scss']
})
export class CarrinhoPageComponent implements OnInit {
    itens: ItemProdutoDto[] = [];
    total?: number;

    constructor(
        private router: Router,
        private service: CarrinhoService,
        private notification: ToastrService
    ) { }

    ngOnInit(): void {
        this.load();
    }

    private load() {
        this.service.getAll().subscribe(result => {
            this.itens = result;
            this.sumTotal();
        });
    }

    private sumTotal() {
        const total = this.itens.reduce((accumulator, item) => {
            return accumulator + item.carrinhoItens.valorTotal;
        }, 0);

        this.total = total;
    }

    alterQuantidade(soma: boolean, id?: number) {
        if (id == null) return;

        this.service.alterQuantidade({ isSoma: soma, id: id }).subscribe(() => {
            this.load();
        });
    }

    remove(id?: number) {
        if (id == null) return;

        this.service.remove({ id }).subscribe(() => {
            this.load();
            this.notification.success('Item removido com sucesso');
        });

    }

    finalizar() {
        if (!this.itens || this.itens.length <= 0)
            return this.notification.error('Não há itens para finalizar');

        return this.service.finalize().subscribe(() => {
            this.load();
            this.total = 0;
            this.notification.success('Compra finalizada com sucesso');
        })
    }

    goInicio() {
        this.router.navigate([''], { skipLocationChange: true });
    }
  
    goCarrinho() {
      this.router.navigate(['/carrinho'], { skipLocationChange: true });
    }
}