import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../../domain/models/produto';
import { APIURL } from '../connection-constant';
import { GetAllProdutosQuery } from '../../domain/query/produto';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    constructor(private http: HttpClient) { }

    getAll(query: GetAllProdutosQuery): Observable<Produto[]> {
        var url = "/produtos/all";
        return this.http.get<Produto[]>(APIURL + url, { params: { ...query } });
    }
}