'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation' 


export default function ClienteLogin() {
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')

  const route = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/autenticacao/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, senha })
      })

      if (response.ok) {
        const data = await response.json()
        const id = data.id
        route.push(`/perfil/${id}`)
      } else {
        const errorData = await response.json()
        alert(`Erro ao fazer login: ${errorData.error}`)
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      alert('Erro de conexão com o servidor.')
    }
  }

  return (
    
          <form onSubmit={handleLogin}>
            <label htmlFor="nome">nome:</label>
            <input
              type="name"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <br></br>

            <label htmlFor="senha">Senha:</label>
            <div>
              <input
                type="password"
                id="senha"
                name="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

        
            <br></br>

            <button type="submit" >Entrar</button>

             <a href="userNew" className="button"> Ir para a página de login</a>
          </form>

         
  )
}