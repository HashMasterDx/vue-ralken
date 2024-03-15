import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import axios from 'axios'

const guard = (to, from, next) => {
  if (localStorage.getItem('token')) {
    axios.post('http://localhost:8000/api/token/verify/', {
      token: localStorage.getItem('token')
    })
      .then(response => {
        next()
      })
      .catch(error => {
        localStorage.removeItem('token')
        next('/login')
      });
  } else {
    next('/login')
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        guard(to, from, next)
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      beforeEnter: (to, from, next) => {
        guard(to, from, next)
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue'),
      beforeEnter: (to, from, next) => {
        guard(to, from, next)
      }
    },
    {
      path: '/users/:userId/posts/',
      name: 'user_posts',
      component: () => import('../views/UserPostsView.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        guard(to, from, next)
      }
    },
    {
      path: '/users/:userId/albums/',
      name: 'user_albums',
      component: () => import('../views/UserAlbumsView.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        guard(to, from, next)
      }
    },
    {
      path: '/users/:albumId/photos/',
      name: 'album_photos',
      component: () => import('../views/AlbumPhotosView.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        guard(to, from, next)
      }
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import('../views/AlbumsView.vue'),
      beforeEnter: (to, from, next) => {
        guard(to, from, next)
      }
    },
    {
      path: '/bitacora',
      name: 'bitacora',
      component: () => import('../views/BitacoraView.vue'),
      beforeEnter: (to, from, next) => {
        guard(to, from, next)
      }
    }
  ]
})

export default router
