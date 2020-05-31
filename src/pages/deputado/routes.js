/**
 *      Arquivo responsável por concentrar todas as rotas do componente
 */
export default
    [
        {
            path: '/deputado',
            name: 'Deputado',
            component: () => import('./Deputado')
        }
    ]