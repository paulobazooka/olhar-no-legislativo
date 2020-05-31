/**
 *      Utilitário para formatar as datas
 */
export const formatDate = {
    dmy: (ts) => {
      if (ts === null) return ''
      var dd = new Date(ts)
      dd = (dd.getDate() < 9 ? '0' : '') + dd.getDate() + '/' + (dd.getMonth() < 9 ? '0' : '') + (dd.getMonth() + 1) + '/' + dd.getFullYear() // dd/mm/yyyy
      return dd
    }
  }
  