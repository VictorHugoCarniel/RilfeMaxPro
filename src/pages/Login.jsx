import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <main className="bg-light d-flex align-items-center py-4">
            <section className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card login-card shadow border-0">
                            <div className="card-body p-4 p-md-5">
                                <div className="mb-4">
                                    <Link 
                                        to="/" 
                                        className="d-flex align-items-center justify-content-center gap-2 text-decoration-none mb-4">
                                        <div className="text-start">
                                            <h1 className="h1 mb-0 fw-bold text-dark">RifleMax Pro</h1>
                                            <p className="text-secondary">Equipamentos para Caça Esportiva</p>
                                        </div>
                                    </Link>
                                    <h2 className="h3 fw-bold text-dark mb-2">Bem-vindo de Volta</h2>
                                    <p className="text-muted">Entre na sua conta para continuar</p>
                                </div>

                                <form>
                                    <div className="mb-3 text-start">
                                        <label htmlFor="email" className="form-label fw-semibold">E-mail</label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="email" 
                                            placeholder="seu@email.com"
                                            required
                                        />
                                    </div>

                                    <div className="mb-4 text-start">
                                        <label htmlFor="password" className="form-label fw-semibold">Senha</label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            id="password" 
                                            placeholder="Sua senha"
                                            required
                                        />
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <a href="#" className="small text-decoration-none login-link">
                                            Esqueceu a senha?
                                        </a>
                                    </div>

                                    <button type="submit" className="login-link btn btn-login w-100 py-3 mb-4 fw-semibold">
                                        Entrar
                                    </button>

                                    <div className="text-center">
                                        <span className="text-muted small">Não tem uma conta? </span>
                                        <Link to="/cadastro" className="small text-decoration-none login-link fw-semibold">
                                            Cadastre-se
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login;