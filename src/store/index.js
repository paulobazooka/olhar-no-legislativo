/**
 *      Arquivo responsável por configurar o vuex
 *  da aplicação
 */
import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex);

export default new Vuex.Store({ modules });