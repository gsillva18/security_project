export default function ClienteList({ clientes = []}) {
  return (
    <ul>
      {clientes.map((agendamento) => (
        <li key={agendamento.agendamentoid}>

          <span>
            {agendamento.nomeservico} - {new Date (agendamento.datahora).toLocaleString('pt-BR', {
              dateStyle: 'short',
              timeStyle: 'short'
              
            }
            
            )} - {agendamento.concluido ? 'Concluido': ' Pendente'}
          </span> 
          <input 
           type="checkbox"
           checked={agendamento.concluido}
           readOnly
           style={{marginLeft: '10px'}}
          ></input>
        </li>
      ))}
    </ul>
  )
}
