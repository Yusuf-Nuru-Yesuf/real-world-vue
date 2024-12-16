import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventDetails from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import About from '@/views/About.vue'
import EventLayout from '@/views/event/Layout.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventList,
      props: route => ({page: parseInt(route.query.page) || 1})
    },
    {
      path: '/about-us',
      name: 'About',
      component: About,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'), this type of routing is for performance optimization when the app is big
      // alias: '/about' an alias is a different path that leads to the same component work same way as redirect
    },
    {
      // redirecting old routue to new route
      // redirect is better for SEO
      path: '/about',
      redirect: { name: 'About' }
    },
    {
      path: '/events/:id',
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'EventDetails',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: EventEdit
        }
      ]
    },
    {
      path: '/event/:afterEvent(.*)', // for redirecting when having a nested route
      redirect: to => {
        return { path: '/events/' + to.params.afterEvent }
      } // this is when having a nested route
      // redirect: () => {
      //   return { name: 'EventDetails' },  id will be directed automatically to EventDetails
      // }
    },
    {
      path: '/:catchAll(.*)', // for 404 page
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError
    }
  ],
})

export default router
