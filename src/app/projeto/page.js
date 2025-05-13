import db from "@/lib/db"
import './style.css'
export default async () => {
    const usuario = await db.query("select * from usuario")
 return (<>

 <body>
   <div class="texto-centralizados">
    <h1>Agendamento</h1>
    <h3>selecione serviço, data e hora</h3>
    </div>

    
   <div class = "container">
    <img class="imagem" src= "image-barbearia.jpg"/>
    <button>Serviço</button>
    <button>Data e Hora</button>
   
    </div>

    

    <div class="barra"></div>

   
    </body>
 
 </>);
} 