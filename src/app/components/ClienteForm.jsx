import { useState }  from 'react'

export default function ClienteForm({ onAddCliente }) {
    const [datahora, setDatahora] = useState('')
    const [concluido, setConcluido] = useState(false)
    const [nomeservico, setNomeservico] = useState('')
    
   
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddCliente({ nomeservico, datahora, concluido })
        setDatahora('')
        setConcluido(false)
        setNomeservico('')
    }

    return (
        <form onSubmit={handleSubmit}>  
         
        <input 
        type="number"
        placeholder="ID do serviço"
        value={nomeservico}
        onChange={(e) => setNomeservico(e.target.value)}
        />

        <input
        type="datetime-local"
        value={datahora}
        onChange={(e) => setDatahora(e.target.value)}
         />

         <input
         type="checkbox"
         checked={concluido}
         onChange={(e) => setConcluido(e.target.checked)}
         
         />

           
        
        <button type="submit">
            Adicionar Agendamento

        </button>
        
        </form>
    )

}