import { useState, useEffect } from "react";
import { ProductService } from "../service/ProductService";

export function useProductDetail(id) {
    const [produto, setProduto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function carregarProduto() {// espera carregar os produtos antes de prosseguir
            const data = await ProductService();
            const produtoId = parseInt(id.replace(':', ''));
            const produtoEncontrado = data.find(p => p.id === produtoId);

            if (produtoEncontrado) {
                setProduto(produtoEncontrado);
            } else {
                console.error("Produto não encontrado");
            }
        }

        carregarProduto();
    }, [id]);

    return { produto, loading };
}

export function useCarrinho() {
    const adicionarAoCarrinho = (produto) => {
        const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho') || '[]');

        const itemExistente = carrinhoAtual.find(item => item.id === produto.id);

        if (itemExistente) {
            itemExistente.quantity = (itemExistente.quantity || 1) + 1;
        } else {
            carrinhoAtual.push({
                ...produto,
                quantity: 1,
                originalPrice: parseFloat(produto.price.replace('R$ ', '').replace('.', '').replace(',', '.'))
            });
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
    };

    return { adicionarAoCarrinho };
}