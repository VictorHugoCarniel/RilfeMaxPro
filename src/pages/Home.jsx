import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { useProducts } from "../hooks/useProduct";
import { useCarrinho } from "../hooks/useProductDetail";

function Home() {
    const produtos = useProducts();
    const { adicionarAoCarrinho } = useCarrinho();

    return (
        <>
            <NavBar />
            <main>
                <section className="text-white card-2 bg-custom-dark">
                    <div className="container">
                        <div className="container-princ text-start ps-0">
                            <h1 className="display fw-bold mb-1">
                                Equipamentos Premium para Caça Esportiva
                            </h1>
                            <p className="texto-sec mb-4 fs-5">
                                Os melhores rifles e acessórios para caçadores profissionais e entusiastas.
                                Qualidade, precisão e confiabilidade garantidas.
                            </p>
                            <a href="#catalogo" className="btn btn-light fw-bold">
                                Ver Catálogo
                            </a>
                        </div>
                    </div>
                </section>

                <section id="catalogo" className="py-5 bg-light">
                    <div className="container">
                        <h2 className="h3 fw-bold mb-4">Catálogo de Rifles</h2>
                        <p className="mb-5 text-secondary">
                            Explore nossa seleção de rifles de alta qualidade para caça esportiva
                        </p>

                        <div className="row">
                            {produtos.length === 0 ? (
                                <p className="text-center">Carregando produtos...</p>
                            ) : (
                                produtos.map(produto => (
                                    <ProductCard
                                        key={produto.id}
                                        produto={produto}
                                        onAdd={adicionarAoCarrinho}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;