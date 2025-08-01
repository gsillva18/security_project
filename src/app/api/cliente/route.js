
import { NextResponse } from 'next/server'
import pool from "../../../lib/db";

export async function GET() {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM agendamento')
    client.release()
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Erro listando alunos:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { nome, datahora, concluido} = await request.json()
    const client = await pool.connect()
    await client.query(
      'INSERT INTO atendimento (nomeid, datahora, concluido) VALUES ($1, $2, $3)',      
      [nomeid, datahora, concluido]
    )
    client.release()
    return NextResponse.json({ status: 201 })
  } catch (error) {
    console.error('Error adding aluno:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}