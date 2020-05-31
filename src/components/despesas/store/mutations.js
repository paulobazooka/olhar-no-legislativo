/**
 *  Arquivo responsável por alterar o estado da aplicação
 */
import * as types from './mutations_types'

export default {
    [types.SET_DESPESAS] (state, payload){
        state.despesas = payload
    }
}