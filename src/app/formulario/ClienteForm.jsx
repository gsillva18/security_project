import { useState }  from 'react'

export default function ClienteForm({ onAddCliente }) {
    const [nome, setNome] = useState('')
    const [datahora, setDatahora] = useState('')
    const [concluido, setConcluido] = useState(false)
   
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddCliente({ nome, datahora, concluido})
        setNome('')
        setDatahora('')
        setConcluido(false)
    }

    return (
        <form onSubmit={handleSubmit}>  
         <input 
          type="text"
          placeholder="serviço"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
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