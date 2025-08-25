'use client'

import style from './page.module.css';
import { useState } from 'react';



export default function Menu(){
  return(
 <div>
  <section id="home" className={style.section}>
    
      <div className={style.container}></div>
      <div className={style.barra}></div>


    <div className={style.menu}>
    <a href="#home">HOME </a>
    <a href="#barbearia"> BARBEARIA </a>
    <a href="#servicos"> SERVIÇOS </a>
    <a href="#localizacao"> LOCALIZAÇÃO </a>
    <a href="#agendar"> AGENDAR </a>
    <a href="userNew"> CADASTRAR </a>
    <a href="novoLogin"> ENTRAR </a>
    </div>

    
    <h1 className={style.h1}>Barbearia do Deda </h1>
    <h2 className={style.h2}>Seja bem-vindo!</h2>
    <p className={style.p1}> Renove seu visual. Redescubra sua confiança. <br></br> </p>

<p className={style.p2}>
Dos cortes clássicos aos estilos modernos, aqui é o,
<br></br> lugar certo para quem valoriza estilo, cuidado 
<br></br> e personalidade. Na Barbearia do Deda, cada detalhe é pensado <br></br> para você sair se sentindo 
 renovado. <br></br>
</p>
    
    <p className={style.p3}>  Agende seu horário agora e viva a experiência Deda.</p>

    <img src="logo.png" className={style.img}></img>
    </section>
    

  <section id="barbearia" className={style.section}>

       <h1 className={style.h11}>Sobre a barbearia </h1>
       <p className={style.sobre}> Texto Aqui</p>

      <div className={style.box2}></div>
      <div className={style.circle}></div>

   </section>

  <section id="servicos" className={style.section}>
     <h1 className={style.servicos}> Serviços </h1>
    
   
     <div className={style.retangulo}></div>

    <img src="corte.png" className={style.img2}></img>
    <img src="barba.png" className={style.img3}></img>
    <img src="cortebarba.png" className={style.img4}></img>

  </section>


   <section id="agendar" className={style.section}>
     <h1 className={style.agendar}>Agende Seu Horário e Aproveite  Nossos Serviços Exclusivos</h1>
    
      <p className={style.text}> Reserve seu horário de forma rápida e prática para 
      aproveitar a qualidade e o atendimento especializado
       da nossa barbearia. Oferecemos uma experiência
        única, com cortes de cabelo e barba em um 
        ambiente confortável e acolhedor.</p>

        <div>
        <a href="novoLogin" className={style.irparalog}> Agendar</a>
        </div>



   <div className={style.retangulo2}></div>
  
 </section>

    <section id="localizacao" className={style.section}>
      <h1 className={style.local}> Onde estamos? </h1>
      <p className={style.text2}> Você nos encontra na Praça Dr. Cunha Lima, na Rua Epitácio Cunha Lima,  Areia - PB.</p>
 
    

    <div className={style.ret}>
    </div>
</section>


   <footer className={style.footer}> 
   
     <span className={style.texto}> Dúvidas? Entre em contato e nos siga no Instagram </span> 
    

    <div className={style.org}>
      <img src="whats.png" className={style.whats}></img>
     <span className={style.number}> (83) 998454640 </span>
     </div>
      
      <div className={style.org2}>
        <img src="insta.png" className={style.instaa}></img>
     <span className={style.insta}>  deda.barbeiro </span>
     </div>
     
   </footer>
</div>
  )
  
}

