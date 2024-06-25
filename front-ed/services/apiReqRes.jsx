import axios from 'axios'

const api = axios.create({baseURL: 'https://reqres.in/api'})

export async function getFuncionarios(){
  try{
    const response = await api.get('/users?per_page=12')
    return response.data.data
  } catch (error){
    console.error(`Erro ao buscar produtos: ${error.message}`)
  }
}
