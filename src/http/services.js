/**
 *  Arquivo reponsável por centralizar todas as requisições que serão feitas polos módulos
 */

import { services as deputados } from '@/pages/home/index'
import { services as deputado } from '@/pages/deputado/index'
import { services as despesas } from '@/components/despesas/index'

export default {
    deputado,
    deputados,
    despesas
}