// import Login from './components/Login.vue'
// import Admin from './components/Admin.vue'

import Index from './components/Index.vue'
import Dashboard from './components/Dashboard.vue'
import User from './components/User.vue'

// Routes
const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '',
        component: Dashboard
      },
      {
        path: 'User',
        component: User
      }
      // {
      //   path: '/member',
      //   component: Member,
      //   children: [
      //     {
      //       path: '',
      //       name: 'member_index',
      //       component: MemberIndex
      //     },
      //     {
      //       path: ':id',
      //       name: 'member_detail',
      //       component: MemberDetail,
      //       props: true
      //     }
      //   ]
      // }
    ]
  }
  // {
  //   path: '/login',
  //   component: Login
  // }
]

export default routes
