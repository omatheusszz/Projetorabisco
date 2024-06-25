import axios from 'axios'

const api = axios.create({baseURL: 'http://127.0.0.1:80'})

export async function getProdutos(){
  try{
    const response = await api.get('/produto')
    console.log(response.data)
    return response.data
  } catch (error){
    console.error('Erro ao buscar produtos: ${error.message}')
  }
}