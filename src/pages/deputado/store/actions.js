/**
 *  Arquivo responsável por gerenciar as actions para alterar o estado da aplicação
 * 
 */
import services from '@/http'  // omite-se o index pois o mesmo já reconhece index.js com default
//import * as storage from '../storage'
import * as types from './mutations_types'


// realiza a buscar pelos orientandos
export const ActionGetDeputado = (context, payload) => {
    return services.deputado.getDeputado({id: payload})
        .then(res => {
            if(res.status === 200){
              const deputado = res.body.dados;
              context.dispatch('ActionSetDeputado', deputado);
            }
        })
        .catch(error =>{
            console.error(`Erro ao buscar deputados`, error)
        });
}


// seta um deputado no state da aplicação
export const ActionSetDeputado = ({ commit }, payload) => {
  commit(types.SET_DEPUTADO, payload);
}

