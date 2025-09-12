'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'
import style from "./page.module.css"

export default function ClienteLogin() {
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const route = useRouter()
  const { setUsuarioLogado } = useAuth()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/autenticacao/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, senha })
      })

      if (res.ok) {
        const data = await res.json()
        setUsuarioLogado(data)
        route.push('/perfil')
      } else {
        const err = await res.json()
        alert(err.error)
      }
    } catch (error) {
      console.error(error)
      alert('Erro de conexão')
    }
  }
  
  return (
    <div>
      <h2 className={style.h2}>Bem-vindo!</h2>
      <p  className={style.texto}> Faça login  para acessar a página </p>
      <p className={style.text}> Ainda não tem uma conta? <br></br>
        Cadastre-se e aproveite o melhor da barbearia!</p>
 
 <a href="userNew"  className={style.outrapagina}> Cadastrar</a>

    <form onSubmit={handleLogin}>
    <div className={style.box}>
      <h2 className={style.titulo}>Login</h2>

      <label className={style.name} htmlFor="nome">Nome:</label>
      <input
        className={style.nome}
        type="text"
        id="nome"
        name="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />

      <label className={style.senha} htmlFor="senha">Senha:</label>
      <input
        className={style.password}
        type="password"
        id="senha"
        name="senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />

      <h4 className={style.remember}>Esqueceu a senha?</h4>

      <button className={style.entrar} type="submit">Entrar</button>
      <div className={style.barra}></div>
      <div className={style.barra2}></div>
    </div>
  </form>
</div>


)
}

