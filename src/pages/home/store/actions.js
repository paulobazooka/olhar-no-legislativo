/**
 *  Arquivo responsável por gerenciar as actions para alterar o estado da aplicação
 * 
 */
import services from '@/http'  // omite-se o index pois o mesmo já reconhece index.js com default
//import * as storage from '../storage'
import * as types from './mutations_types'


// realiza a buscar pelos orientandos
export const ActionGetDeputados = (context) => {
    return services.deputados.getDeputados()
        .then(res => {
            if(res.status === 200){
              const deputados = res.body.dados;
              context.dispatch('ActionSetDeputados', deputados);
            }
        })
        .catch(error =>{
            console.error(`Erro ao buscar deputados`, error)
        });
}


// seta a lista de deputados no state da aplicação
export const ActionSetDeputados = ({ commit }, payload) => {
  commit(types.SET_DEPUTADOS, payload);
}

