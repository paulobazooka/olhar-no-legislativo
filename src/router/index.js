/**
 *      Arquivo responsável por configurar as rotas dentro da aplicação
 */
import Vue from 'vue'
import routes from './modules'
import Router from 'vue-router'
import beforeEach from './beforeEach'

Vue.use(Router)

const router = new Router({ routes });

router.beforeEach(beforeEach); // passando como parâmetro o middleware personalizado

export default router;