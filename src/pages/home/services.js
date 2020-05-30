/**
 *      Arquivo responsável por guardar todos os end-point que serão requisitados
 *          pelo módulo
 */

export default {
    getDeputados: { method: 'get', params:{
        ordem: 'ASC',
        ordenarPor: 'nome'
    } }
}