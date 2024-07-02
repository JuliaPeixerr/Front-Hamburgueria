export interface AddItenCommand {
    codigoProduto: number
}

export interface AlterQuantidadeCommand {
    isSoma: boolean,
    id: number
}

export interface RemoveItemCommand {
    id: number
}