/**
 *      Arquivo responsável por concentrar todas as rotas do componente
 */
export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('./Home')
    }
]
