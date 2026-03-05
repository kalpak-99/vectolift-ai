"use client"

import { useState } from "react"

export default function AIChat() {

  const [open,setOpen] = useState(false)
  const [message,setMessage] = useState("")
  const [messages,setMessages] = useState<any[]>([])
  const [loading,setLoading] = useState(false)

  const sendMessage = async () => {

    if(!message) return

    const newMessages = [
      ...messages,
      {role:"user", text:message}
    ]

    setMessages(newMessages)
    setMessage("")
    setLoading(true)

    const res = await fetch("/api/chat",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        message,
        chat:newMessages
      })
    })

    const data = await res.json()

    setMessages([
      ...newMessages,
      {role:"ai", text:data.reply}
    ])

    setLoading(false)
  }

  return(
    <>
    
    {/* CHAT BUTTON */}

    <div
    style={{
      position:"fixed",
      bottom:"25px",
      right:"25px",
      zIndex:9999
    }}
    >

      <button
      onClick={()=>setOpen(!open)}
      style={{
        background:"#2563eb",
        color:"white",
        border:"none",
        borderRadius:"999px",
        padding:"14px 22px",
        fontWeight:600,
        cursor:"pointer",
        boxShadow:"0 8px 20px rgba(0,0,0,0.3)"
      }}
      >
      💬 Ask AI
      </button>

    </div>


    {/* CHAT WINDOW */}

    {open && (

      <div
      style={{
        position:"fixed",
        bottom:"90px",
        right:"25px",
        width:"340px",
        height:"460px",
        background:"#0f172a",
        borderRadius:"16px",
        display:"flex",
        flexDirection:"column",
        overflow:"hidden",
        boxShadow:"0 10px 30px rgba(0,0,0,0.4)",
        zIndex:9999
      }}
      >

        {/* HEADER */}

        <div
        style={{
          background:"#2563eb",
          padding:"12px",
          color:"white",
          fontWeight:600
        }}
        >
        Vectolift AI
        </div>


        {/* MESSAGES */}

        <div
        style={{
          flex:1,
          padding:"10px",
          overflowY:"auto",
          display:"flex",
          flexDirection:"column",
          gap:"8px"
        }}
        >

        {messages.map((msg,i)=>(
          <div
          key={i}
          style={{
            alignSelf:msg.role==="user"?"flex-end":"flex-start",
            background:msg.role==="user"?"#2563eb":"#1e293b",
            color:"white",
            padding:"8px 12px",
            borderRadius:"12px",
            maxWidth:"80%",
            fontSize:"14px"
          }}
          >
          {msg.text}
          </div>
        ))}

        {loading && (
          <div style={{fontSize:"12px",color:"#94a3b8"}}>
            AI typing...
          </div>
        )}

        </div>


        {/* INPUT */}

        <div
        style={{
          borderTop:"1px solid #1e293b",
          display:"flex"
        }}
        >

          <input
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder="Ask something..."
          style={{
            flex:1,
            padding:"10px",
            background:"#0f172a",
            border:"none",
            color:"white",
            outline:"none"
          }}
          />

          <button
          onClick={sendMessage}
          style={{
            background:"#2563eb",
            border:"none",
            color:"white",
            padding:"10px 16px",
            cursor:"pointer"
          }}
          >
          Send
          </button>

        </div>

      </div>

    )}

    </>
  )
}