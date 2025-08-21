'use client'
 
import { useState, useEffect } from 'react'
import style from './page.module.css'
import ClienteForm from '../components/ClienteForm'

export default function Page(){
    const addCliente = async (cliente) => {
        const response = await fetch('/api/agendamento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application-json'
            },
            body: JSON.stringify(cliente)
        })
        alert('Agendamento feito')
    }

    return (
        <div>
         <h1 className={style.h1} > Agendamento </h1>
         <h2 className={style.h2}> E aí, </h2>
            <ClienteForm onAddCliente={addCliente}/>
        </div>
    )
}
