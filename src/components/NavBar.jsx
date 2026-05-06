import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [totalItens, setTotalItens] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const atualizarContador = () => {
            const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
            const total = carrinho.reduce((acc, item) => acc + (item.quantity || 1), 0); //conta quantos produtos tem no carrinho 
            setTotalItens(total);
        };

        atualizarContador();

        window.addEventListener('storage', atualizarContador);//quando tem duas abas do site aberta no navegador e mexe pela outra aba 
        window.addEventListener('carrinhoAtualizado', atualizarContador);//quando adiciona produto na mesma pgina

        const interval = setInterval(atualizarContador, 500); //verifica de meio em meio segundo 

        return () => {
            window.removeEventListener('storage', atualizarContador); 
            window.removeEventListener('carrinhoAtualizado', atualizarContador); 
            clearInterval(interval); 
        };

    }, []);

    return (
        <>
            <header
                className="sticky-top bg-white border-bottom shadow-sm"
                style={{ zIndex: 1030 }}>
                <div className="container d-flex align-items-center justify-content-between py-3">
                    <Link
                        to="/"
                        className="logo-princ d-flex align-items-center gap-2 text-decoration-none"
                        onClick={(e) => {
                            if (window.location.pathname === "/") {
                                e.preventDefault();
                                window.scrollTo({ top: 0 });
                            }
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="logo-icon navbar-icon">
                            <path d="M512 320C512 214 426 128 320 128C214 128 128 214 128 320C128 426 214 512 320 512C426 512 512 426 512 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 400C364.2 400 400 364.2 400 320C400 275.8 364.2 240 320 240C275.8 240 240 275.8 240 320C240 364.2 275.8 400 320 400zM320 176C399.5 176 464 240.5 464 320C464 399.5 399.5 464 320 464C240.5 464 176 399.5 176 320C176 240.5 240.5 176 320 176zM288 320C288 302.3 302.3 288 320 288C337.7 288 352 302.3 352 320C352 337.7 337.7 352 320 352C302.3 352 288 337.7 288 320z" />
                        </svg>
                        <div>
                            <h1 className="text-start h5 mb-0 fw-bold text-dark">RifleMax Pro</h1>
                            <p className="small text-secondary mb-0">Equipamentos para Caça Esportiva</p>
                        </div>
                    </Link>

                    <nav className="d-none d-md-flex align-items-center gap-4">
                        <div className="position-relative"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}>
                            <a href="#" className="nav-link text-dark text-decoration-none d-flex align-items-center gap-1" onClick={(e) => e.preventDefault()} >
                                Produtos
                            </a>

                            {showDropdown && (
                                <div
                                    className="position-absolute bg-white border rounded shadow-sm mt-2"
                                    style={{
                                        minWidth: '220px',
                                        zIndex: 1031,
                                        left: 0
                                    }}>
                                    <Link
                                        to="/#catalogo"
                                        className="dropdown-item px-3 py-2 text-decoration-none text-dark d-block"
                                        style={{ transition: 'background-color 0.2s' }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                                        Produtos com Desconto
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/#"
                            onClick={(e) => {
                                if (window.location.pathname === "/") {
                                    e.preventDefault();
                                    window.scrollTo({ top: 10000 });
                                }
                            }}
                        >
                            <a href="#" className="nav-link text-dark text-decoration-none">Sobre</a>
                        </Link>
                    </nav>

                    <div className="search-bar d-flex">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Buscar produtos..."
                            />
                            <button className="btn btn-outline-secondary btn-sm" type="button">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /> </svg>
                            </button>
                        </div>
                    </div>

                    <div className="d-flex gap-1">
                        <Link to="/login" className="btn-login btn btn-dark">
                            Entre ou Cadastre-se
                        </Link>

                        <Link to="/carrinho" className="text-decoration-none">
                            <button className="btn btn-outline-dark d-flex align-items-center gap-2 cart position-relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    className="cart-icon"
                                    style={{ fill: 'currentColor' }}
                                >
                                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                                Carrinho
                                {/* só mostra se tiver produtos mais de 1 no carrinho */}
                                {totalItens > 0 && (
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                        style={{ fontSize: '0.65rem', padding: '0.25em 0.5em' }}>
                                        {totalItens}
                                    </span>
                                )}
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavBar;