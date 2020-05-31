/**
 *  Arquivo responsável por importa e exportar 
 *      todos os arquivos de rotas e de store do módulo
 */
export { default as services } from './services'    // é necessário colocar a importação do service antes que as outras para evitar possíveis erros ao importar os outros módulo antes
export { default as store } from './store/index' 
export { default as routes } from './routes' 
