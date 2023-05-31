import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("../views/HomePage.vue")
    },
    {
      path: '/Professores',
      name: 'professores',
      component: () => import("../components/Teachers.vue")
    },
    {
      path: '/Salas',
      name: 'salas',
      component: () => import("../components/Rooms.vue")
    },
    {
      path: '/Disciplinas',
      name: 'disciplinas',
      component: () => import("../components/Disciplines.vue")
    },
    {
      path: '/Turmas',
      name: 'turmas',
      component: () => import("../components/Classes.vue") 
    },
    {
      path: '/Horarios',
      name: 'horarios',
      component: () => import("../components/Time.vue")
    },
    {
      path: '/Cursos',
      name: 'cursos',
      component: () => import("../components/Courses.vue")
    },
    {
      path: '/Cadastrar-Turma',
      name: 'cadastrar-turma',
      component: () => import("../components/registrations/RegisterClass.vue")
    },
    {
      path: '/Cadastrar-Disciplina',
      name: 'cadastrar-disciplina',
      component: () => import("../components/registrations/RegisterDiscipline.vue")
    },
    {
      path: '/Cadastrar-Sala',
      name: 'cadastrar-sala',
      component: () => import("../components/registrations/RegisterRoom.vue")
    },
    {
      path: '/Cadastrar-Professor',
      name: 'cadastrar-professor',
      component: () => import("../components/registrations/RegisterTeacher.vue")
    },
    {
      path: '/Cadastrar-Curso',
      name: 'cadastrar-curso',
      component: () => import("../components/registrations/RegisterCourse.vue")
    },
    {
      path: '/Tutorial',
      name: 'tutorial',
      component: () => import("../components/Tutorial.vue")
    }
  ]
})

export default router
