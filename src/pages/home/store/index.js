/**
 *  Arquivo responsável por centralizar todas as stores
 *      responsáveis pelo controle de estado da aplicação 
 */
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

export default {
    state,
    actions,
    getters,
    mutations,
    namespaced: true // garantir que o módulo auth fique assim: AUTH/SET_USER
}