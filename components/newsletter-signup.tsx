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
    <div className="w-[280px] bg-card p-6 shadow-lg md:w-[320px]">
      {/* Title */}
      <div className="mb-4">
        <p className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">Climbing Culture Container</p>
        <h2 className="mb-3 text-3xl font-bold leading-tight text-card-foreground">Escalada i més.</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Vora és una newsletter d’escalada on parlem d’actualitat, estètica, cultura i comunitat.
O de qualsevol altra cosa que ens agradi. L’enviem setmanalment, si el temps ens ho permet.{" "}
          .
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-card-foreground">
Rep la newsletter          </p>
          <Input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-2 bg-input text-sm text-foreground placeholder:text-muted-foreground"
          />
          <Input
            type="email"
            placeholder="Correu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-input text-sm text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-foreground font-medium uppercase tracking-wide text-background hover:bg-foreground/90 disabled:opacity-60"
        >
          {status === "loading" ? "sending..." : "subscriu-t’hi"}
        </Button>

        {msg ? (
          <p className={`text-sm ${status === "error" ? "text-red-500" : "text-muted-foreground"}`}>{msg}</p>
        ) : null}
      </form>
    </div>
  )
}
