
import React from "react";
import properties from '../../properties';
import axios from 'axios'
var backendUrl = properties.backendUrl;


function FazerLogin(props) {

    const dados = {
        email: props.email,
        password: props.password
    }
    
    const chave = axios.post(backendUrl+'/login', dados)
        .then(res => {
            console.log('resposta')
            console.log(res)
            
        })
        .catch(err => {
            console.log('erro')
            console.log(err)
        })


    return (
        <>
           
        </>
    );
}

export default FazerLogin;
