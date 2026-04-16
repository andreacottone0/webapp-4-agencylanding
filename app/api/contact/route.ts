import { type NextRequest, NextResponse } from "next/server"
import mysql from "mysql2/promise"

// Configurazione del database
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number.parseInt(process.env.DB_PORT || "3306"),
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validazione dei dati richiesti
    const { firstName, lastName, email, companyName, phoneNumber, marketingBudget, projectDetails, agreedToTerms } =
      body

    // Controllo campi obbligatori
    if (!firstName || !lastName || !email || !projectDetails) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!agreedToTerms) {
      return NextResponse.json({ error: "You must agree to the terms and conditions" }, { status: 400 })
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Connessione al database
    const connection = await mysql.createConnection(dbConfig)

    try {
      // Query per inserire i dati
      const query = `
        INSERT INTO LeadTable (
          first_name, 
          last_name, 
          email, 
          company_name, 
          phone_number, 
          marketing_budget, 
          project_details, 
          agreed_to_terms
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `

      const values = [
        firstName,
        lastName,
        email,
        companyName || null,
        phoneNumber || null,
        marketingBudget || null,
        projectDetails,
        agreedToTerms ? 1 : 0,
      ]

      const [result] = await connection.execute(query, values)

      await connection.end()

      return NextResponse.json(
        {
          message: "Contact form submitted successfully",
          id: (result as any).insertId,
        },
        { status: 201 },
      )
    } catch (dbError) {
      await connection.end()
      console.error("Database error:", dbError)
      return NextResponse.json({ error: "Database error occurred" }, { status: 500 })
    }
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
