import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import { useParams } from "react-router-dom";
import axios from 'axios'

import MenuCentral from '../../components/macro/MenuCentral/MenuCentral'
import TituloDash from '../../components/micro/Titulo/TituloDash'
import properties from '../../properties';
var backendUrl = properties.backendUrl;


function Dashboard() {
    let { id } = useParams();
    const [user, setUser] = useState({})
    const [dataNascimento, setDataNascimento] = useState([])
    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    useEffect(() => {
        getUser()
    },[])
    const getUser = () =>{
        axios.get(backendUrl+"/cadastro-cliente/" + id, config)
            .then(response => {
                setUser(response.data)
                setDataNascimento(response.data.dataNascimento)
                
            })
            
        
    }
    

    return (
        <>
            <div className="container">
                <TituloDash nome={user.nome} />
                <MenuCentral user={user} dataNascimento={dataNascimento}/>
                <br/>
                <br/>
            </div>
        </>
    )
}

export default Dashboard