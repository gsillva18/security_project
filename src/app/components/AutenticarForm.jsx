import {useState} from 'react'
import style from "./styles.module.css"

export default function AutenticarForm({ onAddConsumidor}) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddConsumidor({nome, email, senha})
        setNome(''),
        setEmail(''),
        setSenha('')
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className={style.logar}>
            <input
              type="text"
              placeholder='Nome'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
       </div>
       <br></br>

            <input 
              type='email'
              placeholder='e-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

            <button  type='submit'>
                       Acessar

            </button>




      </form>
    )

}