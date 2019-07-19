import { produto } from './produto';

export class carrinho{
    collection = [produto];
    constructor(){
    function addProdut(produto:produto) {
        this.collection.push(produto);
        } 
    }
    
}