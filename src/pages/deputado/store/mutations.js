/**
 *  Arquivo responsável por alterar o estado da aplicação
 */
import * as types from './mutations_types'

export default {
    [types.SET_DEPUTADO] (state, payload){
        state.deputado = payload
    }
}