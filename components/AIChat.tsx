"use client"

import { useState, useRef, useEffect } from "react"

export default function AIChat() {

  const [open,setOpen] = useState(false)
  const [message,setMessage] = useState("")
  const [messages,setMessages] = useState<any[]>([])
  const [loading,setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
}, [messages])

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

  const openChat = () => {

    setOpen(!open)

    if(messages.length === 0){
      setMessages([
        {
          role:"ai",
          text:`👋 Hi! I'm Vectolift AI.

• 🌐 Need a website for your business?
• 📈 Want to grow online with SEO?
• 🚀 We can build your digital presence.

Tell me about your business 🙂`
        }
      ])
    }
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
      onClick={openChat}
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
        background:"#000000",
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
  background:"#111111",
  padding:"12px",
  color:"white",
  fontWeight:600,
  display:"flex",
  alignItems:"center",
  gap:"8px"
}}
>

<img
src="/images/vectolift white (2).png"
style={{
  width:"30px",
  height:"30px"
}}
/>

𝒗𝒆𝒄𝒕𝒐𝒍𝒊𝒇𝒕 AI

</div>


        {/* MESSAGES */}

        <div
        style={{
          flex:1,
          padding:"10px",
          overflowY:"auto",
          display:"flex",
          flexDirection:"column",
          gap:"10px"
        }}
        >

        {messages.map((msg,i)=>(
          <div
          key={i}
          style={{
            display:"flex",
            alignItems:"flex-start",
            gap:"8px",
            justifyContent:msg.role==="user"?"flex-end":"flex-start"
          }}
          >

          {msg.role==="ai" && (
            <img
            src="/images/vectolift white (2).png"
            style={{
              width:"28px",
              height:"28px",
              borderRadius:"50%"
            }}
            />
          )}

          <div
          style={{
            background:msg.role==="user"?"#2563eb":"#1e293b",
            color:"white",
            padding:"10px 12px",
            borderRadius:"12px",
            maxWidth:"75%",
            fontSize:"14px",
            whiteSpace:"pre-line"
          }}
          >
          {msg.text}
          </div>

          </div>
        ))}

        {loading && (
          <div style={{fontSize:"12px",color:"#94a3b8"}}>
             Vectolift AI typing...
          </div>
        )}

        <div ref={messagesEndRef} />

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
onKeyDown={(e)=>{
  if(e.key==="Enter"){
    sendMessage()
  }
}}
          placeholder="Ask about websites, SEO..."
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
  width:"44px",
  height:"44px",
  borderRadius:"50%",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  cursor:"pointer"
}}
>

<img
src="/images/vectolift-logo.png"
style={{
  width:"30px",
  height:"30px"
}}
/>

</button>

        </div>

      </div>

    )}

    </>
  )
}