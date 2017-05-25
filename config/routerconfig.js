export default [
  {
    path: '/goods',
    meta: { requiresAuth: false },
    component: (resolve) => { require(['../src/components/goods.vue'], resolve) }
  },
  {
    path: '/rating',
    meta: { requiresAuth: false },
    component: (resolve) => { require(['../src/components/rating.vue'], resolve) }
  },
  {
    path: '/seller',
    meta: { requiresAuth: false },
    component: (resolve) => { require(['../src/components/seller.vue'], resolve) }
  }
]
