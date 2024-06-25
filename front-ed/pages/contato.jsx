import Titulo from "@/components/Titulo";
import Headerb from "@/components/Headerb";
import CardListFunc from '@/components/CardListFunc';
import { useEffect, useState } from "react";
import { getFuncionarios } from "@/services/apiReqRes";

export default function contato() {
  const [funcionarios, setFuncionarios] = useState([])

  async function buscaFuncionarios() {
    try {
      const data = await getFuncionarios()
      setFuncionarios(data)
      
    } catch (error) {
      console.error('Erro ao buscar funcionarios', error)
    }
  }
  useEffect(() => {
    buscaFuncionarios()
  }, [])
  return (
    <>
      <Headerb />
      <Titulo texto="Conheça nossa equipe de vendedores." />
      <CardListFunc funcionarios={funcionarios} />
    </>
  )
}

