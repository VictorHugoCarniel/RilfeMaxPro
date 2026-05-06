import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useProductDetail, useCarrinho } from "../hooks/useProductDetail";

function ProductDesc() {
    const { id } = useParams();
    const { produto, loading } = useProductDetail(id); //usa o id do produto para buscar no arquivo json as informações do produto 
    const { adicionarAoCarrinho } = useCarrinho(); //mesma funcao ja criada na usecARINHO


    if (!produto) { // se nao existir produtos exibe a mensagem
        return (
            <>
                <NavBar />
                <div className="container py-5 text-center">
                    <h3>Produto não encontrado</h3>
                    <Link to="/" className="btn btn-primary mt-3">
                        Voltar ao Catálogo
                    </Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <NavBar />
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <img
                                    src={`/images/${produto.imageUrl}`}
                                    className="img-fluid rounded"
                                    alt={produto.name}
                                    style={{
                                        width: '100%',
                                        maxHeight: '500px',
                                        objectFit: 'cover',
                                        borderRadius: '12px'
                                    }}
                                />
                            </div>

                            <div className="d-flex gap-2 overflow-auto" >
                                {[1, 2, 3].map((num) => (
                                    <div
                                        key={num}
                                        style={{
                                            minWidth: '100px',
                                            height: '100px',
                                            cursor: 'pointer',
                                            border: '2px solid #9e9b9bff',
                                            borderRadius: '8px',
                                        }}>
                                        <img src={`/images/${produto.imageUrl}`}
                                            alt={`${produto.name}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-md-6 text-start">
                            <h1 className="fw-bold mb-3">{produto.name}</h1>

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                
                                {produto.originalPrice ? ( //se o produto original tiver desconto aparece riscao em cima 
                                    <div>
                                        <p className="text-muted text-decoration-line-through mb-0" style={{ fontSize: '0.9rem' }}>
                                            {produto.originalPrice}
                                        </p>
                                        <h4 className="fw-bold mb-0 text-success">{produto.price}</h4>
                                        {produto.discount && (
                                            <span className="badge bg-danger mt-1">
                                                {produto.discount}% OFF
                                            </span>
                                        )}
                                    </div>
                                ) : (
                                    <h4 className="fw-bold mb-0 text-dark">{produto.price}</h4>
                                )}
                                <div className="badge bg-success text-white">Em estoque</div>
                            </div>

                            <p className="text-muted small">Calibre: .308 Winchester</p>

                            <h6 className="fw-bold mt-4">Descrição</h6>
                            <p className="text-secondary">
                                Rifle bolt action de alta precisão, ideal para caça de médio e
                                longo alcance. Construído com materiais premium e acabamento
                                impecável. Perfeito para caçadores que exigem o melhor em
                                precisão e confiabilidade.
                            </p>

                            <ul className="list-unstyled mt-3">
                                <li className="mb-2">
                                    <span className="fw-bold">Calibre:</span> .308
                                </li>
                                <li className="mb-2">
                                    <span className="fw-bold">Estoque:</span> 5 unidades
                                </li>
                                <li className="mb-2">
                                    <span className="fw-bold">Marca:</span> {produto.marca}
                                </li>
                            </ul>

                            <div className="d-flex align-items-center gap-2 mt-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                    className="icon"
                                    style={{ width: "1.25rem", height: "1.25rem", fill: "#0f5132" }}            >
                                    <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" /></svg>
                                <span className="small text-muted">
                                    Produto certificado para caça esportiva
                                </span>
                            </div>
                            <div className="d-flex align-items-center gap-2 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="icon" style={{ width: "1.25rem", height: "1.25rem", fill: "#0f5132" }}> <path d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64z" /> </svg>
                                <span className="small text-muted">Garantia de 2 anos</span>
                            </div>
                            <div className="d-flex align-items-center gap-2 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="icon" style={{ width: "1.25rem", height: "1.25rem", fill: "#0f5132" }}> <path d="M32 160C32 124.7 60.7 96 96 96L384 96C419.3 96 448 124.7 448 160L448 192L498.7 192C515.7 192 532 198.7 544 210.7L589.3 256C601.3 268 608 284.3 608 301.3L608 448C608 483.3 579.3 512 544 512L540.7 512C530.3 548.9 496.3 576 456 576C415.7 576 381.8 548.9 371.3 512L268.7 512C258.3 548.9 224.3 576 184 576C143.7 576 109.8 548.9 99.3 512L96 512C60.7 512 32 483.3 32 448L32 160zM544 352L544 301.3L498.7 256L448 256L448 352L544 352zM224 488C224 465.9 206.1 448 184 448C161.9 448 144 465.9 144 488C144 510.1 161.9 528 184 528C206.1 528 224 510.1 224 488zM456 528C478.1 528 496 510.1 496 488C496 465.9 478.1 448 456 448C433.9 448 416 465.9 416 488C416 510.1 433.9 528 456 528z" /></svg>
                                <span className="small text-muted">
                                    Frete grátis para todo Brasil
                                </span>
                            </div>

                            <div className="d-flex gap-2 mt-5">
                                <button
                                    type="button"
                                    className="btn btn-dark d-flex align-items-center gap-2"
                                    onClick={() => adicionarAoCarrinho(produto)}>
                                    Adicionar ao Carrinho
                                </button>
                                <Link to="/#catalogo" className="btn btn-outline-secondary">
                                    Voltar ao Catálogo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default ProductDesc;