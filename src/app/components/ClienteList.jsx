export default function ClienteList({Cliente, onDeleteCliente}) {
    return (
        <ul>
            {Cliente.map((cliente) => (
                <li key={Cliente.id} >
                    <span>{Cliente.servicoid} - {Cliente.consumidorid} - {Cliente.datahora} - {Cliente.concluido ? 'Concluído' : 'Pendente'}</span>
                    <button style={{backgroundColor:"transparent", color:"#F00"}}
                    onClick={() => onDeleteCliente(Cliente.id)}
                    >
                    x
                    </button>
                </li>
            ))}

        </ul>
    )
}
