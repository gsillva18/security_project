'use client'
 
import { useState, useEffect } from 'react'
import style from './page.module.css'
import ClienteForm from '../components/ClienteForm'

export default function Page(){
    const addCliente = async (cliente) => {
        const response = await fetch('/api/agendamento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application-json'
            },
            body: JSON.stringify(cliente)
        })
        alert('Agendamento feito')
    }

     function horariosDisponiveis() {
        const horarios = [];
        const inicio =new Date();
        inicio.setHours(0, 0, 0, 0);

        const fim =  new Date ();
        fim.setHours(23, 59, 59, 999)

        for (let hora = inicio.getTime(); hora < fim.getTime(); hora += 15 * 60 *1000) {
            const horaAtual = new Date(hora);
            let disponivel = true;

        for (const indisponivel of horariosIndisponiveis) {
            if (horaAtual.getTime() >= indisponivel.inicio.getTime() &&
                horaAtual.getTime() < indisponivel.fim.getTime()) {
                disponivel = false;
                break;
                }
        }
        if (disponivel) {
            horarios.push(horaAtual);
        }
     }

     return horarios;
    }

    return (
        <div>
         <h1 className={style.h1} > Agendamento </h1>
         <h2 className={style.h2}> E aí, </h2>
            <ClienteForm onAddCliente={addCliente}/>
        </div>
    )
    }

