/**
 *      Arquivo responsável por concentrar todas as rotas do componente
 */
export default {
    path: '/admin_faculty_guidance',
    name: 'AdminFacultyGuidance',
    meta: {
        requiresAuth: true,
        authorizedUsers: ['admin']
    },
    component: () => import('./AdminFacultyGuidance')
}
