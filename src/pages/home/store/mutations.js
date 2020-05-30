/**
 *  Arquivo responsável por alterar o estado da aplicação
 */
import * as types from './mutations_types'

export default {
    [types.SET_DEPUTADOS] (state, payload){
        state.deputados = payload
    }
}