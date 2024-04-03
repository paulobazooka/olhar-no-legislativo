'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
// import { fetchDeputados } from "@/app/services/fetchDados"

async function buscar(nome: string) {
  // const response = await fetchDeputados(nome)
  // console.log(response)
}

export function Buscador() {
  const [nome, setNome] = useState('')

  return (
    <div className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-3">
        <Input id="name" placeholder="Nome do deputado" />
        <Button>Buscar</Button>
      </div>
    </div>
  )
}
