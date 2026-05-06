import React from "react";
import { Link } from "react-router-dom";

function Cadastro() {
    return (
        <main className="min-vh-100 bg-light d-flex align-items-center py-4">
            <section className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-7">
                        <div className="card login-card shadow border-0">
                            <div className="card-body p-4 p-md-5">
                                <div className="text-center mb-4">
                                    <Link
                                        to="/"
                                        className="d-flex align-items-center justify-content-center gap-2 text-decoration-none mb-4"
                                    >
                                        <div className="text-start">
                                            <h1 className="h1 mb-0 fw-bold text-dark">RifleMax Pro</h1>
                                            <p className="text-secondary">Equipamentos para Caça Esportiva</p>
                                        </div>
                                    </Link>
                                    <h2 className="h3 fw-bold text-dark mb-2">Criar sua Conta</h2>
                                    <p className="text-muted">Preencha seus dados para se cadastrar</p>
                                </div>

                                <form className="text-start">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="nome" className="form-label fw-semibold">
                                                Nome<span className="asterisco">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="nome" 
                                                placeholder="Seu nome"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="sobrenome" className="form-label fw-semibold">
                                                Sobrenome<span className="asterisco">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="sobrenome" 
                                                placeholder="Seu sobrenome"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="cpf" className="form-label fw-semibold">
                                                CPF<span className="asterisco">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="cpf" 
                                                placeholder="000.000.000-00"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="dataNascimento" className="form-label fw-semibold">
                                                Data de Nascimento<span className="asterisco">*</span>
                                            </label>
                                            <input 
                                                type="date" 
                                                className="form-control" 
                                                id="dataNascimento" 
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label fw-semibold">
                                                E-mail<span className="asterisco">*</span>
                                            </label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                placeholder="seu@email.com"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="senha" className="form-label fw-semibold">
                                                Senha<span className="asterisco">*</span>
                                            </label>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                id="senha" 
                                                placeholder="Sua senha"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <h5 className="fw-semibold text-dark mb-3">Endereço</h5>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="cep" className="form-label fw-semibold">
                                                CEP<span className="asterisco">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="cep" 
                                                placeholder="00000-000"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-8 mb-3">
                                            <label htmlFor="cidade" className="form-label fw-semibold">
                                                Cidade<span className="asterisco">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="cidade" 
                                                placeholder="Sua cidade"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="estado" className="form-label fw-semibold">
                                                Estado<span className="asterisco">*</span>
                                            </label>
                                            <select className="form-select" id="estado" required>
                                                <option value="">Selecione...</option>
                                                <option value="AC">Acre</option>
                                                <option value="AL">Alagoas</option>
                                                <option value="AP">Amapá</option>
                                                <option value="AM">Amazonas</option>
                                                <option value="BA">Bahia</option>
                                                <option value="CE">Ceará</option>
                                                <option value="DF">Distrito Federal</option>
                                                <option value="ES">Espírito Santo</option>
                                                <option value="GO">Goiás</option>
                                                <option value="MA">Maranhão</option>
                                                <option value="MT">Mato Grosso</option>
                                                <option value="MS">Mato Grosso do Sul</option>
                                                <option value="MG">Minas Gerais</option>
                                                <option value="PA">Pará</option>
                                                <option value="PB">Paraíba</option>
                                                <option value="PR">Paraná</option>
                                                <option value="PE">Pernambuco</option>
                                                <option value="PI">Piauí</option>
                                                <option value="RJ">Rio de Janeiro</option>
                                                <option value="RN">Rio Grande do Norte</option>
                                                <option value="RS">Rio Grande do Sul</option>
                                                <option value="RO">Rondônia</option>
                                                <option value="RR">Roraima</option>
                                                <option value="SC">Santa Catarina</option>
                                                <option value="SP">São Paulo</option>
                                                <option value="SE">Sergipe</option>
                                                <option value="TO">Tocantins</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="bairro" className="form-label fw-semibold">
                                                Bairro<span className="asterisco">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="bairro" 
                                                placeholder="Seu bairro"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-8 mb-3">
                                            <label htmlFor="rua" className="form-label fw-semibold">
                                                Rua<span className="asterisco">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="rua" 
                                                placeholder="Sua rua"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="numero" className="form-label fw-semibold">
                                                Número<span className="asterisco">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="numero" 
                                                placeholder="Nº"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="complemento" className="form-label fw-semibold">Complemento</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="complemento" 
                                            placeholder="Apartamento, bloco, etc."
                                        />
                                    </div>

                                    <div className="text-center mb-2">
                                        <label className="small" htmlFor="termos">
                                            Ao criar sua conta você automaticamente aceita os <a className="login-link">Termos de Uso</a> e <a className="login-link">Política de Privacidade</a><span className="asterisco">*</span>
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-login login-link w-100 py-3 mb-3 fw-semibold">
                                        Criar Conta
                                    </button>

                                    <div className="text-center">
                                       <span className="text-muted small">Já tem uma conta? </span>
                                        <Link to="/login" className="small text-decoration-none login-link fw-semibold">
                                            Fazer login
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

export default Cadastro;