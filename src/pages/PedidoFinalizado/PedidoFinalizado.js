import React, { useState, useEffect } from 'react'
import './PedidoFinalizado.css'
import TitulosHome from "../../components/micro/TitulosHome/TitulosHome";
import CaixaInfo from "../../components/micro/CaixaInfo/CaixaInfo";
import Endereco from "../../components/Endereco/Endereco";
import Pagamento from "../../components/Pagamento/Pagamento"
import TotalPedido from "../../components/TotalPedido/TotalPedido";
import BotaoVoltar from "../../components/micro/BotaoVoltar/BotaoVoltar";
import Barril from "./images/barril.png"
import NumeroPedido from "../../components/NumeroPedido/NumeroPedido";
import { Icon } from 'semantic-ui-react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import Barco from "../../assets/imgs/teste/barco.gif"
import properties from '../../properties';
var backendUrl = properties.backendUrl;

function PedidoFinalizado(props) {
    const params = useParams(":pesq")

    const [pesq, setPesq] = useState('')
    const [pedido, setPedido] = useState([])
    const [endereco, setEndereco] = useState([])
    const [cartao, setCartao] = useState([])
    const [pagamento, setPagamento] = useState([])
    const [numero, setNumero] = useState([])
    const [metodoPag, setMetodoPag] = useState([])
    const [metodoPagId, setMetodoPagId] = useState('')


    
    const ULRPedidoFinalizado = backendUrl+"/Pedido/" + params.pesq

    useEffect(() => {
        const fetchProds = async () => {

            const res = await axios.get(ULRPedidoFinalizado)
            setPedido(res.data)
            setEndereco(res.data.endereco)
            setPagamento(res.data.pagamento)
            setCartao((res.data.cartao))
            setMetodoPag((res.data.metodoPag))
        }
        

        fetchProds()
        
        

    }, [])
    function MeusPedidos(){
        localStorage.setItem('defaultIndex', JSON.stringify(2))
        let email = localStorage.getItem('user')
        axios.get(backendUrl+'/cadastro-cliente/getByEmail/' + email)
                .then((response) => {
                    window.location.href="http://"+window.location.hostname+":3000/dashboard/"+response.data.id_Cliente
                })
    }
    useEffect(()=>{
        setNumero((cartao.numero))
        setMetodoPagId((metodoPag.id_metodoPag))
    })

    const final = "" + numero
    


    return (
        <>
            <body className="body-finalizado">

                <div class="container">
                    <div class="row pt-5">
                        <div class="col d-flex justify-content-center">
                            <p className="title-dash"> Pedido confirmado <Icon name="chevron circle down" className="icone-pedido-finalizado"/></p>
                        </div>
                    </div>
                        <div class="col-12 d-flex justify-content-center">
                            <img classname="barco" src={Barril} alt="" width="90px"/>
                        </div>
                        <div class="col-12 d-flex justify-content-center">
                            <h5 class="titulo-pedido"><b>NÚMERO DO PEDIDO<NumeroPedido className="num-pedido" numeroPedido={pedido.id} /></b></h5>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div className='col-9'>
                            <TitulosHome texto='' />

                    </div>
                    <div class="row">
                        
                        <div class="tituloResumo col-12 d-flex">
                            <h6 class="resumo"><b>RESUMO DO PEDIDO:</b></h6>
                        </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                        <div class=" col-12 col-md-9 pt-2 d-flex justify-content-center resumo-pedido-end">
                            <div class="col-12">
                                <div className='d-flex justify-content-around global-caixa'>
                                   <CaixaInfo titulo='Endereço de envio'>
                                    <Endereco rua={endereco.rua} numero={endereco.numero} bairro={endereco.bairro} cidade={endereco.cidade} estado={endereco.estado} cep={endereco.cep}/>
                                </CaixaInfo>
                                <CaixaInfo titulo='Forma de pagamento'>
                                    <Pagamento metodoPagId={metodoPagId} finalCartao={final.replaceAll(' ', '').substring(12,16)} parcelas={pagamento.parcelamento}/>
                                </CaixaInfo>

                                <CaixaInfo titulo="Total do Pedido">
                                    <TotalPedido subtotal={(+pedido.subtotal).toFixed(2).toString().replace('.', ',')} frete='15,00' total={(+pedido.total).toFixed(2).toString().replace('.', ',')} />
                                </CaixaInfo>
                                
                                </div>
                                

                            </div>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-around">
                        <div class="col-12  mt-4 d-flex justify-content-around">

                            <button className=" btn btn-voltarHomer"><a className="link-finalizado-pedido" href="/home"> Voltar para home</a></button>
                            <button className=" btn btn-voltarHome" onClick={() =>{MeusPedidos()}}><a className="link-finalizado-pedido" > Ver página do pedido</a></button>

                        </div>
                    </div>

                </div>
                <br /><br />
                <br /><br />


            </body>


        </>
    );
}

export default PedidoFinalizado;
