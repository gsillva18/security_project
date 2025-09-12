import pool from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(request) {
  try {
    const { nome, email, senha } = await request.json();
    console.log("Recebi do frontend:", nome, email, senha);

    const client = await pool.connect();

    await client.query(
      'INSERT INTO consumidor (nome, email, senha) VALUES ($1, $2, $3)',
      [nome, email, senha]
    );

    client.release();

    return NextResponse.json({ message: "Usuário criado com sucesso!" }, { status: 201 });
  } catch (error) {
  console.error("Erro ao adicionar consumidor:", error.message, error.stack);
  return NextResponse.json({ error: error.message }, { status: 500 });
}

}



export async function GET() {
    try{
        const client = await pool.connect()
        const result = await client.query('SELECT * FROM consumidor')
        client.release()
        return NextResponse.json(result.rows)
    } catch (error) {
        console.error('Erro listando consumidores:', error)
        return NextResponse.json({ error: 'Internal server error'}, { status: 500 })
    }
}

