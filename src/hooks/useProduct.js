import { useEffect, useState } from "react";
import { ProductService } from "../service/ProductService";

export function useProducts() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function carregarProdutos() {
            try {
                const data = await ProductService(); //data recebe os produtos carregados na productService que recebe do json
                console.log("Produtos recebidos:", data); //exibe os produtos 
                setProdutos(data); //seta os produtos com o que foi recebido 
            } catch (error) {
                console.error("Erro ao carregar produtos:", error);
            }
        }

        carregarProdutos();
    }, []);

    return produtos;
}