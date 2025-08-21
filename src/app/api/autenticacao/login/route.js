import { NextResponse } from 'next/server'
import pool from "@/lib/db";


export async function POST(request) {
    try{
        const{nome, senha} = await request.json()
        const client = await pool.connect()
        const result = await client.query(
            'SELECT * FROM consumidor WHERE nome = $1 AND senha = $2',
            [nome, senha]
        )

        const id = result.rows[0].id
        client.release()

        return NextResponse.json({ message: 'Usuário logado com sucesso', id}, { status: 201})
    } catch(error) {
        console.error('Error ao logar consumidor:', error)
        return NextResponse.json({ error: 'Internal server error'}, { status: 500})
    }
}

