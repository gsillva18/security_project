import express from "express";
import pool  from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {

    const body = await req.json();
    const { nome, senha} = body;

    if(!nome || !senha) {
        return new Response(JSON.stringify({ message: "nome e senha são nobrigatorios"}), {status: 400} );
    }

    try{
        const result = await pool.query(' SELECT * FROM consumidor WHERE nome = $1', [nome]);
        if (result.rows.length === 0){
            return new Response(JSON.stringify({ message: "user no encontrado"}), {status: 401});
        }

        const usuario = result.rows[0];

        const senha = await(senha, consumidor.senha);
        if (!senha){
            return res.status(401).json({ message: "senha errada vei"});

        }

        return res.status(200).json({message: "login certo", usuarioId: usuario.id})
    } catch (error) {
        console.error(err);
        return res.status(500).json({ message: "o servidor não ta abrido"})
    }

   
}

app.listen(3000, () => console.log("servdor rodando na porta3000"));
