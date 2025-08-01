export default function ClienteList({Clientes, onDeleteCliente}) {
    return (
        <ul>
            {Clientes.map((cliente) => (
                <li key={Cliente.id} >
                    <span>{Cliente.nome} - {Cliente.datahora} - {Cliente.concluido ? 'Concluído' : 'Pendente'}</span>
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
