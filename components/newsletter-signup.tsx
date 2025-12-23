"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [msg, setMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus("loading")
    setMsg("")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim(),
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus("error")
        setMsg(data?.message || "No se pudo suscribir. Prueba de nuevo.")
        return
      }

      setStatus("success")
      setMsg("¡Suscrito! Revisa tu email por si hay confirmación.")
      setEmail("")
      setName("")
    } catch {
      setStatus("error")
      setMsg("Error de red. Inténtalo otra vez.")
    }
  }

  return (
<div className="w-full max-w-[780px]">
  <div className="grid gap-4 md:grid-cols-2">
    {/* Caja texto */}
    <div className="border-2 border-black bg-[#e7e1c7] p-6 shadow-[6px_6px_0_0_#000]">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/80">
        Coming soon
      </p>

      {/* TITULAR → Anton */}
      <h2 className="font-display mb-4 text-[42px] leading-[0.95] tracking-[-0.03em] text-black md:text-[52px]">
        ESCALADA I MÉS.
      </h2>

      {/* TEXTO → Space Grotesk (body por defecto) */}
      <p className="max-w-[38ch] text-[14px] leading-relaxed text-black/75">
        Vora és una newsletter d’escalada on parlem d’actualitat, estètica, cultura i comunitat.
        O de qualsevol altra cosa que ens agradi. L’enviem setmanalment, si el temps ens ho permet.
      </p>

      <div className="mt-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-black">
        Journey <span className="text-black/50">or</span> Email us
      </div>
    </div>

    {/* Caja form */}
    <div className="border-2 border-black bg-[#e7e1c7] p-6 shadow-[6px_6px_0_0_#000]">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/80">
        Sign up for first news
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          <Input
            type="text"
            placeholder="Give us your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 rounded-none border-0 border-b-2 border-black bg-transparent px-0 text-[14px] text-black placeholder:text-black/40 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Input
            type="email"
            placeholder="And your email, pls"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-10 rounded-none border-0 border-b-2 border-black bg-transparent px-0 text-[14px] text-black placeholder:text-black/40 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-black disabled:opacity-50"
        >
          {status === "loading" ? "sending..." : "Join our club"}
          <span aria-hidden className="text-black/60">→</span>
        </button>

        {msg ? (
          <p className={`text-sm ${status === "error" ? "text-red-600" : "text-black/70"}`}>
            {msg}
          </p>
        ) : null}
      </form>
    </div>
  </div>
</div>


  )
}
