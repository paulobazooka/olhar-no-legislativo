/**
 *      Arquivo responsável por centralizar todos as 
 *          rotas contidas nos módulos da aplicação
 */
import { routes as home } from '@/pages/home/index'
import { routes as deputado } from '@/pages/deputado/index'

export default [
    ...home,
    ...deputado
   
]
