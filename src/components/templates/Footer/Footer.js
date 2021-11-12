import React from 'react'
import './Footer.css'
import Telefone from '../../../assets/imgs/footer/telefone.png'

function Footer(props) {

    return(
        <>
        <body>

        <footer>
                {/* Inicio frete grátis */}

                <div className="topBar">
                    <div id="tpl-center" className="tpl-center">
                        <section className="cadastroNew" id="cadastroNew">
                            <div className="texto" id="texto">
                                <span className="frete"> Frete </span>
                                <strong className="fixo">Fixo para qualquer região de São Paulo <br /></strong> <br />

                            </div>


                        </section>
                    </div>
                </div>
                {/* Fim frete grátis */}

                {/* Inicio Footer */}


                <div className="container-fluid middleArea">
                    <div id="tpl-center" className="row justify-content-center tpl-center">

                        <div className="coluna atendimento col-md-2 col-12 contact-box">
                            <h3 className="titulo-footer"> <b>Atendimento </b> </h3>
                            <span className="cellphone"><img id="cellphone" src={Telefone} alt="" width="60px"
                                height="60px" /></span>
                            <div className="left">
                                <strong className="texto-footer" id="telefone">(11) 99653-6532 </strong>
                                <a className="link-footer" href="contato@devbrew.com.br">contato@devbrew.com.br</a>
                                <span>Segunda a Sexta das 9h ás 18h</span>
                            </div>
                            <strong className="texto-footer" id="idade18">
                                PRODUTOS DESTINADOS A <br />
                                MAIORES DE 18 ANOS
                            </strong>
                        </div>


                        <div className="coluna ajuda col-md-2 col-12 contact-box">
                            <h3 className="titulo-footer"><b> Ajuda e Suporte</b></h3>
                            <ul className="itens">
                                <li className="item">
                                    <a className="link-footer" href="">Perguntas Frequentes</a>
                                </li>
                                <li className="item">
                                    <a className="link-footer" href="">Forma de Pagamento</a>
                                </li>
                                <li className="item">
                                    <a className="link-footer" href="">Taxas de Entrega</a>
                                </li>
                                <li className="item">
                                    <a className="link-footer" href="">Prazo de Entrega</a>
                                </li>
                                <li className="item">
                                    <a className="link-footer" href="">Troca e Devolução</a>
                                </li>
                            </ul>
                        </div>


                        <div className="coluna forma col-md-2 col-12 contact-box">
                            <h3 className="titulo-footer"><b>Formas de Pagamentos </b></h3>
                            <ul className="itens">
                                <li className="pagamento">
                                    <i className="fab fa-cc-visa"></i>
                                    <i className="fab fa-cc-mastercard"></i>
                                    <i className="fab fa-cc-discover"></i>
                                    <i className="fab fa-cc-amex"></i>
                                    <i className="fab fa-cc-diners-club"></i>
                                    <i className="fab fa-cc-paypal"></i>

                                </li>
                            </ul>
                        </div>

                        <div className="coluna redes">
                            <h3 className="titulo-footer"><b> Redes Sociais</b></h3>
                            <ul className="itens">
                                <li className="item">
                                    <i className="fab fa-facebook"></i>
                                </li>
                                <li className="item">
                                    <i className="fab fa-instagram"></i>
                                </li>
                            </ul>
                        </div>



                    </div>

                </div>


                <div className="bottom">
                    <div className="tpl-center">
                        <small> Avenida Paulista, 10767 - Paulista - CEP: 00000-000 - São Paulo - SP - CNPJ 70.020.745/0001-14
                            <br />
                            Copyright © 2021, TODOS OS DIREITOS RESERVADOS.</small>
                    </div>
                </div>

            </footer>

        </body>
            
{/* Fim Footer */}
        </>
    )
}

export default Footer