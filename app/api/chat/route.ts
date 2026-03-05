import { NextResponse } from "next/server"
import Groq from "groq-sdk"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

export async function POST(req: Request) {
  try {
    const { message, chat } = await req.json()

    // Detect phone
const phoneMatch = message.match(/\d{10}/)

// Detect email
const emailMatch = message.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/)

let leadMessage = "🔥 NEW WEBSITE LEAD\n\n"

if (phoneMatch) {
  leadMessage += `Phone: ${phoneMatch[0]}\n`
}

if (emailMatch) {
  leadMessage += `Email: ${emailMatch[0]}\n`
}

leadMessage += `Message: ${message}`

// Send to Telegram
if (phoneMatch || emailMatch) {

  await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: leadMessage

      })
    }
  )

}

    const aiResponse = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
  {
    role: "system",
    content: `
You are Vectolift AI assistant.

Vectolift helps businesses with:
- Website development
- Branding
- SEO
- Digital marketing

Your job:
1. your answers should be short not too long and easy to understand
2. Understand the user's business
3. Ask what service they need
4. Ask budget
5. Ask phone number

Do NOT repeat questions if user already answered.
`
  },

  ...chat.map((msg: any) => ({
    role: msg.role === "ai" ? "assistant" : "user",
    content: msg.text
  })),

  {
    role: "user",
    content: message
  }
]
    })

    const reply = aiResponse.choices[0].message.content

    return NextResponse.json({
      reply
    })

  } catch (error) {
    console.error("AI ERROR:", error)

    return NextResponse.json({
      reply: "Sorry, AI is temporarily unavailable."
    })
  }
}