import React, { useState, useEffect } from 'react'
import ListarProdutos from '../ListarProdutos/ListarProdutos'
import Produto from '../../Produto/Produto'
import axios from 'axios'
import properties from '../../../properties';
var backendUrl = properties.backendUrl;


function NovidadesHome(props) {
    

    const [novidades, setNovidades] = useState([])
    const [preco1, setPreco1] = useState([])
    let ids = []

    useEffect(() => {
        getNovidades()
    }, [])

    const getNovidades = () => {
        axios.get(backendUrl+`/Card/novidades`)
            .then((response) => {
                setNovidades(response.data)
                



            })
        
            // .then(() => {
            //     novidades.map(prod => {
            //         ids.push(prod.id_produto)

            //     })

            // }).then(() =>{
            //     console.log(ids)
            //     axios.get(`http://'+window.location.hostname+':8080/Card/multi`,ids).
            //     then((response) =>{
            //         console.log(response.data)
            //     })
                
            // })
    }

    




    
    

    return novidades.map(prod => {

        const link = '/produto/' + prod.id_produto
        


        
        
        
        

        return (


            <Produto id={prod.id_produto} linkProduto={link} imagem={prod.foto} descricao={prod.nome_produto} preco={(+prod.valor_preco).toFixed(2).toString().replace('.', ',')}
             >
                <a className="/produto:id}"></a></Produto>


        )
    })


}

export default NovidadesHome