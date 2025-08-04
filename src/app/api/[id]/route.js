import { NextResponse } from 'next/server'
import pool from "@/lib/db";

export async function DELETE(request, { params }) {
  try {
    const { id } = params
    const client = await pool.connect()
    await client.query('DELETE FROM agendamento WHERE id = $1', [id] )
    client.release()
    return NextResponse.json({ message: 'cliente removido com sucesso' })
  } catch (error) {
    console.error('Erro removendo aluno:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
