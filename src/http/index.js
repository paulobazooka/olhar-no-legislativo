/**
 *  Arquivo responsável por configurar o padrão das requisições
 *    que serão realizadas pelo objeto http
 */
import Vue from 'vue'
import services from './services'
import VueResource from 'vue-resource'
import interceptors from './interceptors'

Vue.use(VueResource)


// Cria a variável http para requisições
const http = Vue.http;


// define o path padrão para as requisições
http.options.root = 'https://dadosabertos.camara.leg.br/api/v2/deputados'; 


// define o método que irá interceptar todas as requisições http da aplicação
http.interceptors.push(interceptors);


// método para mapear todas as services (requisições e incluir no VueResource) de maneira dinâmica
Object.keys(services).map(service =>{
  services[service] = Vue.resource('', {}, services[service]);
})

// Seta no header Json 
http.headers.common['Accept'] = 'application/json';


// console.log(services);

export { http };
export default services;