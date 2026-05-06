export async function ProductService() {
    try {
        const response = await fetch('/data/produtos.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Erro ao carregar os produtos: ", error);
        return [];
    }
}
