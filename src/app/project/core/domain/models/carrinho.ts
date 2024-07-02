import { Produto } from './produto';

export interface Carrinho {
    id: number,
    valor: number,
    data: Date,
    finalizado: string,
    dataFinalizado: Date
}

export interface CarrinhoItem {
    id: number,
    codigoCarrinho: number,
    codigoProduto: number,
    quantidade: number,
    valorUnitario: number,
    valorTotal: number,
    produto: Produto
}

export interface ItemProdutoDto {
    carrinhoItens: CarrinhoItem,
    produto: Produto
}