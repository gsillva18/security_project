'use client'

import { useState, useEffect } from 'react'
import ClienteList from '@/app/components/ClienteList'
import style from './page.module.css'

export default function Home(){
    const[clientes, setClientes] = useState([])

    useEffect(() => {
        fetchClientes()
    }, [])

    const fetchClientes = async () => {
        const response = await fetch('/api/agendamento')
        const data = await response.json()
        setClientes(data)
    }

    return (
        <div>
            <h1 className={style.h1}> Seu histórico </h1>
            <ClienteList clientes={clientes}/>

            <div className={style.barra}></div>
        </div>
    )
}