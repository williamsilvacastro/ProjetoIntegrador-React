import React from 'react'
import './Produto.css'
import BotaoComprar from '../micro/BotaoConfirmar/BotaoConfirmar';
import BotaoAdicionar from '../micro/BotaoConfirmar/BotaoAdicionar';


function Produto(props) {

  return (
    <>
      <div class="col-12 col-lg-2 my-2 mx-3 d-flex flex-column justify-content-between resultadoPesquisa">
        <div class="imgCard d-flex justify-content-center">
          <a class="imgPesquisa" href={props.linkProduto}>
            <img class="imgPesquisa" src={props.imagem} alt="" />
          </a>
        </div>

        <div class="descricao d-flex flex-column justify-content-between">
          <div class="col-12 d-flex justify-content-center">
            <p >{props.descricao}</p>
          </div>

          


        </div>
        <div className='d-flex flex-column'>
          <div>
            <p class="preco">R${props.preco}</p>
          </div>

          <div class="col-12 d-flex align-self-end justify-content-center">
          <a className='d-flex align-self-end me-auto' href="/carrinho" id="botao-comprar-pag-produto"><BotaoAdicionar texto='Adicionar ' /></a>

        </div>
        </div>

        
      </div>
    </>
  );
}

export default Produto;
