/**
 *  Arquivo responsável por gerenciar as actions para alterar o estado da aplicação
 * 
 */
import services from '@/http'  // omite-se o index pois o mesmo já reconhece index.js com default
import * as types from './mutations_types'


// realiza a buscar pelas despesas
export const ActionGetDespesas = (context, payload) => {
    return services.despesas.getDespesas({id: payload})
        .then(res => {
            if(res.status === 200){
              const despesas = res.body.dados;
              context.dispatch('ActionSetDespesas', despesas);
            }
        })
        .catch(error =>{
            console.error(`Erro ao buscar despesas`, error)
        });
}


// seta um deputado no state da aplicação
export const ActionSetDespesas = ({ commit }, payload) => {
  commit(types.SET_DESPESAS, payload);
}

