import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddItenCommand, AlterQuantidadeCommand, RemoveItemCommand } from '../../domain/command/carrinho';
import { Carrinho, CarrinhoItem, ItemProdutoDto } from '../../domain/models';
import { APIURL } from '../connection-constant';

@Injectable({
    providedIn: 'root'
})
export class CarrinhoService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<ItemProdutoDto[]> {
        var url = "/Carrinho/itens/all";
        return this.http.get<ItemProdutoDto[]>(APIURL + url);
    }

    addItem(command: AddItenCommand): Observable<Carrinho> {
        var url = "/Carrinho/add/item";
        return this.http.post<Carrinho>(APIURL + url, command);
    }

    alterQuantidade(command: AlterQuantidadeCommand) {
        var url = "/Carrinho/item/alter/quantidade";
        return this.http.post<void>(APIURL + url, command);
    }

    remove(command: RemoveItemCommand) {
        var url = "/Carrinho/item/remove";
        return this.http.post<void>(APIURL + url, command);
    }

    finalize() {
        var url = "/Carrinho/finalize";
        return this.http.post<void>(APIURL + url, {});
    }
}