import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../components/initials/HomePage.vue")
    },
    {
      path: '/Professores',
      name: 'professores',
      component: () => import("../components/initials/Teachers.vue")
    },
    {
      path: '/Salas',
      name: 'salas',
      component: () => import("../components/initials/Rooms.vue")
    },
    {
      path: '/Disciplinas',
      name: 'disciplinas',
      component: () => import("../components/initials/Disciplines.vue")
    },
    {
      path: '/Classes',
      name: 'classes',
      component: () => import("../components/initials/Classes.vue") 
    },
    {
      path: '/Grade',
      name: 'grade',
      component: () => import("../components/initials/Grid.vue")
    },
    {
      path: '/Cadastrar-Turma',
      name: 'cadastrar-turma',
      component: () => import("../components/registrations/RegisterClass.vue")
    },
    {
      path: '/Cadastrar-Sala',
      name: 'cadastrar-sala',
      component: () => import("../components/registrations/RegisterRoom.vue")
    },
    {
      path: '/Cadastrar-Categoria-de-Sala',
      name: 'cadastrar-categoria-de-sala',
      component: () => import("../components/registrations/RegisterRoomCategory.vue")
    },
    {
      path: '/Cadastrar-Professor',
      name: 'cadastrar-professor',
      component: () => import("../components/registrations/RegisterTeacher.vue")
    },
    {
      path: '/Cadastrar-Timeslot',
      name: 'cadastrar-timeslot',
      component: () => import("../components/registrations/RegisterTimeslot.vue")
    },
    {
      path: '/Tutorial',
      name: 'tutorial',
      component: () => import("../components/initials/Tutorial.vue")
    },
    {
      path: '/Atualizar-Classe/:id',
      name: 'atualizar-classe',
      component: () => import("../components/updates/UpdateClass.vue") 
    },
    {
      path: '/Atualizar-Nome-Classe/:id',
      name: 'atualizar-nome-classe',
      component: () => import("../components/updates/UpdateClassName.vue")
    },
    {
      path: '/Atualizar-Materia-Classe/:itemID/:classID',
      name: 'atualizar-materia-classe',
      component: () => import("../components/updates/UpdateClassSubject.vue")
    },
    {
      path: '/Cadastrar-Materia-Classe/:id',
      name: 'cadastrar-materia-classe',
      component: () => import("../components/registrations/RegisterClassSubject.vue")
    },
    {
      path: '/Atualizar-Sala/:id',
      name: 'atualizar-sala',
      component: () => import("../components/updates/UpdateRoom.vue")
    },
    {
      path: '/Atualizar-Categoria-de-Sala/:id',
      name: 'atualizar-categoria-de-sala',
      component: () => import("../components/updates/UpdateRoomCategory.vue")
    },
    {
      path: '/Atualizar-Professor/:id',
      name: 'atualizar-professor',
      component: () => import("../components/updates/UpdateTeacher.vue")
    },
    {
      path: '/Categorias-de-Salas',
      name: 'categorias-de-salas',
      component: () => import("../components/initials/RoomsCategories.vue")
    }
  ]
});

export default router;
