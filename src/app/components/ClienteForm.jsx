import { useState }  from 'react'

export default function ClienteForm({ onAddCliente }) {
    const [datahora, setDatahora] = useState('')
    const [nomeservico, setNomeservico] = useState('')
    
   
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddCliente({ nomeservico, datahora})
        setDatahora(''),
        setNomeservico('')
    }

    return (
        <form onSubmit={handleSubmit}>  

        <h2> Qual o serviço de hoje?</h2>
        <br></br>
        <select
    
        value={nomeservico}
        onChange={(e) => setNomeservico(e.target.value)}
        required
        >
        
        <option value=""> Selecione o serviço </option>
        <option value="corte"> Corte</option>
        <option value="barba"> Barba</option>
        <option value="corte + barba"> Corte + barba </option>
        </select>
   

        <h2>Escolha a data e o horário </h2>
        <br></br>
        <input
        type="datetime-local"
        value={datahora}
        onChange={(e) => setDatahora(e.target.value)}
        required
         />

        <br></br>
        
        <button type="submit">
            Agendar

        </button>
        
        
        </form>
    )

}