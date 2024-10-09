// Composables
import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import LoginView from '@/views/LoginView.vue'
import AuthService from '@/services/AuthService'

const routes: RouteRecordRaw[] = [
  {
    path: '/sign-in',
    component: LoginView,
  },
  {
    path: '/',
    name: 'Index',
    redirect: '/main', // Change this name to match the name of your main route
    component: IndexView,
    beforeEnter: (to, from, next) => {
      if (!AuthService.isAuthenticated() && to.name !== 'Sign In') {
        console.log(to.name)
        console.log('Not authenticated, redirecting to sign-in')
        next('/sign-in')
      }
      next()
    },
    children: [
      {
        path: 'main', // Change this path to match the path of your main route
        name: 'Main',
        component: () => import('@/views/MainView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(), // This enables hash mode
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = AuthService.isAuthenticated()
  const isSignInPage = to.path === '/sign-in'
  const isTargetingAuthRequiredPage = to.path !== '/sign-in'

  console.log('isAuthenticated', isAuthenticated)
  console.log('isSignInPage', isSignInPage)
  console.log(to.path)

  if (!isAuthenticated && isTargetingAuthRequiredPage) {
    // If the user is not authenticated and trying to access a page that requires authentication, redirect to sign-in
    next('/sign-in')
  } else if (isAuthenticated && isSignInPage) {
    // If the user is authenticated but trying to access the sign-in page, redirect to main page
    next('/main')
  } else if (to.path === '/' && isAuthenticated) {
    // If the user is authenticated and trying to access the root path, redirect to main page
    next('/main')
  } else {
    // In all other cases, proceed as normal
    next()
  }
})

export default router
