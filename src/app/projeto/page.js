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

    <div>

   <button class="botom">serviço</button>
   <button>data e hora</button>
   <button> selecionar</button>
   </div>

    <img class="imagem" src= "image-barbearia.jpg"/>

    <div class="barra"></div>

   
    </body>
 
 </>);
} 