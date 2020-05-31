/**
 *  Middleware para verificar as rotas das entre as páginas
 */
export default async (to, from, next) => {

  if (from.name === null && to.name !== 'Home') {
    next({ name: 'Home' });
  }
  else
    next();
}