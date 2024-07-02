import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { IndividualConfig, ToastrService } from "ngx-toastr";
import { Carrinho, CarrinhoItem, ItemProdutoDto } from "../../core";
import { CarrinhoService } from "../../core/services/carrinho/carrinho.service";

@Component({
    selector: 'carrinho-page',
    templateUrl: './carrinho-page.component.html',
    styleUrls: ['./carrinho-page.component.scss']
})
export class CarrinhoPageComponent implements OnInit {
    itens: ItemProdutoDto[] = [];
    total?: number;

    toastrConfig: Partial<IndividualConfig> = {
        positionClass: 'toast-top-center',
        progressBar: true,
        timeOut: 3000,
        extendedTimeOut: 2000,
        toastClass: "notification-custom",
    };
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
        });

        this.notification.success('Item removido', 'Sucesso!', this.toastrConfig);
    }

    finalizar() {
        this.notification.success('Compra finalizada', 'Sucesso!', this.toastrConfig);
    }

    goInicio() {
        this.router.navigate([''], { skipLocationChange: true });
    }
  
    goCarrinho() {
      this.router.navigate(['/carrinho'], { skipLocationChange: true });
    }
}