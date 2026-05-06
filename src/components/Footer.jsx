import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>

            <footer className="bg-custom-dark text-white pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <h5 className="fw-bold mb-3">RifleMax Pro</h5>
                            <p className="texto-sec small">Equipamentos para Caça Esportiva. Qualidade, precisão e
                                confiabilidade garantidas para profissionais e entusiastas.</p>
                        </div>

                        <div className="col-lg-4 col-md-3 col-6 mb-4 mb-lg-0">
                            <h6 className="fw-bold mb-3">Links</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="#" className="footer-link p-0">Início</a></li>
                                <li className="mb-2"><a href="#catalogo" className="footer-link p-0">Produtos</a></li>
                                <li className="mb-2"><a href="#" className="footer-link p-0">Sobre</a></li>
                                <li className="mb-2"><a href="#" className="footer-link p-0">Contato</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <h6 className="fw-bold mb-3">Contato</h6>
                            <ul className="list-unstyled mb-0 small text-white-light">
                                <li className="mb-2">contato@riflemax.com</li>
                                <li className="mb-2">+55 (11) 1111-1111</li>
                                <li className="mb-2">Pato Branco, PR - Brasil</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center texto-sec-light small pt-4">
                        <p className="mb-0">2025 RifleMax Pro. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;