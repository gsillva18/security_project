'use client'

import { useState, useEffect } from 'react'
import AutenticarForm from '../components/AutenticarForm'

export default function  loginForm() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/autenticacao/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({nome, senha})    
        })
         const data = await response.json()
         console.log("Resposta ao login", data)
            alert('Login feito com sucesso')
    }
 
    return(

        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <br></br>

        <input
         type="text"
         placeholder='Nome'
         value={nome}
         onChange={(e) => setNome(e.target.value)}
         required
         
        />
            <br></br>
        <input
         type='password'
         placeholder='senha'
         value={senha}
         onChange={(e) => setSenha(e.target.value)}
         required
        />
        <br></br>

        <button type='submit'>
            Login
        </button>


        </form>

    )
}

