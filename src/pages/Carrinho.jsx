import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Carrinho() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const carrinhoSalvo = localStorage.getItem('carrinho');
        if (carrinhoSalvo) {
            setCartItems(JSON.parse(carrinhoSalvo));
        }
    }, []);

    const atualizarQuantidade = (id, novaQuantidade) => {
        if (novaQuantidade < 1) return;

        const novosItens = cartItems.map(item =>
            item.id === id ? { ...item, quantity: novaQuantidade } : item
        );

        setCartItems(novosItens);
        localStorage.setItem('carrinho', JSON.stringify(novosItens));
    };

    const removerItem = (id) => {
        const novosItens = cartItems.filter(item => item.id !== id);
        setCartItems(novosItens);
        localStorage.setItem('carrinho', JSON.stringify(novosItens));
    };

    const converterPreco = (preco) => {
        if (typeof preco === 'number') return preco;
        return parseFloat(preco.replace('R$ ', '').replace('.', '').replace(',', '.'));
    };

    const subtotal = cartItems.reduce((sum, item) => {
        const preco = converterPreco(item.price);
        return sum + (preco * item.quantity);
    }, 0);

    return (
        <>
            <NavBar />

            <main className="min-vh-100 bg-light py-5">
                <div className="container">
                    <h1 className="h2 fw-bold mb-4 text-center">Carrinho de Compras</h1>
                    {cartItems.length === 0 ? (
                        <div className="text-center py-5">
                            <h3 className="text-muted mb-3">Seu carrinho está vazio</h3>
                            <Link to="/#catalogo" className="btn btn-primary">
                                Ver Catálogo
                            </Link>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="card border-0 shadow-sm">
                                    <div className="card-body p-4">
                                        {cartItems.map(item => (
                                            <div key={item.id} className="cart-item border-bottom pb-4 mb-4">
                                                <div className="row align-items-start">
                                                    <div className="col-md-2 mb-3 mb-md-0">
                                                        <div
                                                            className="bg-light rounded"
                                                            style={{
                                                                width: '100%',
                                                                height: '120px',
                                                                backgroundImage: item.imageUrl ? `url(/images/${item.imageUrl})` : 'none',
                                                                backgroundSize: 'cover',
                                                                backgroundPosition: 'center'
                                                            }}
                                                        >
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <h5 className="fw-bold mb-2">{item.name}</h5>
                                                        <p className="text-muted small mb-1">{item.marca}</p>
                                                        <p className="text-muted small mb-2">
                                                            Vendido e Entregue por: <strong>RifleMax Pro</strong>
                                                        </p>

                                                        <div className="d-flex align-items-center gap-3 mt-3">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <span className="small text-muted">Quantidade:</span>
                                                                <div className="d-flex align-items-center border rounded">
                                                                    <button
                                                                        className="btn btn-sm btn-outline-secondary border-0"
                                                                        onClick={() => atualizarQuantidade(item.id, item.quantity - 1)}>
                                                                        -
                                                                    </button>
                                                                    <span className="px-3 fw-semibold">{item.quantity}</span>
                                                                    <button
                                                                        className="btn btn-sm btn-outline-secondary border-0"
                                                                        onClick={() => atualizarQuantidade(item.id, item.quantity + 1)}>
                                                                        +
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <button
                                                                className="btn btn-link text-danger p-0 small text-decoration-none"
                                                                onClick={() => removerItem(item.id)}>
                                                                Remover
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4 text-md-end">
                                                        <div className="mb-2">
                                                            <span className="h5 fw-bold text-primary">
                                                                {item.price}
                                                            </span>
                                                        </div>
                                                        <p className="text-muted small mb-0">
                                                            Subtotal: R$ {(converterPreco(item.price) * item.quantity).toFixed(2)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="text-center mt-4">
                                            <Link to="/#catalogo" className="btn btn-outline-primary">
                                                Continuar Comprando
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card border-0 shadow-sm sticky-top">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-3">Resumo do Pedido</h5>

                                        <div className="mb-4">
                                            <label className="form-label fw-semibold small">Calcular Frete</label>
                                            <div className="input-group mb-2">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Digite seu CEP"
                                                />
                                                <button className="btn btn-outline-secondary">
                                                    Calcular
                                                </button>
                                            </div>
                                            <a href="#" className="small text-decoration-none">Não sei meu CEP</a>
                                        </div>

                                        <div className="border-top pt-3">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span className="text-muted">Produtos ({cartItems.length})</span>
                                                <span>R$ {subtotal.toFixed(2)}</span>
                                            </div>

                                            <div className="d-flex justify-content-between fw-bold fs-5 border-top pt-2 mt-2">
                                                <span>Total</span>
                                                <div className="text-end">
                                                    <div className="text-primary">R$ {subtotal.toFixed(2)} </div>
                                                </div>
                                            </div>
                                        </div>

                                        <Link to="/login" className="text-decoration-none">
                                            <button className="btn btn-login w-100 py-3 mt-4 fw-bold fs-6">
                                                Continuar
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Carrinho;