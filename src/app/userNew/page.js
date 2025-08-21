'use client'

import { useState, useEffect} from 'react'
import AutenticarForm from '../components/AutenticarForm'
import style from "./page.module.css"
   
    
export default function Home() {
    const addConsumidor = async (consumidor) => {
        const response = await fetch('/api/autenticacao/signup', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json'

            },
            body: JSON.stringify(consumidor)
        })
        alert('Cliente adicionado com sucesso')
    }

    return (
        <div className={style.container}>

            <h1> Sign-up </h1>
            <AutenticarForm onAddConsumidor={addConsumidor}/>
        </div>
    )
}