/**
 *      Arquivo responsável por centralizar todos as 
 *          store contidas nos módulos da aplicação
 */
import { store as home } from '@/pages/home/index'
import { store as deputado } from '@/pages/deputado/index'
import { store as despesas } from '@/components/despesas/index'


export default {
   home,
   despesas,
   deputado
}