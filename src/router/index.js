import Vue from 'vue'
import VueRouter from 'vue-router'
// import poster from '../views/posterIndex.vue'

Vue.use(VueRouter)
//  处理路由重复点击报错的bug
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: '/',
    // 重定向                                        
    redirect: '/luckDraw'
  },
  {
    path: '/luckDraw',
    meta: {
      index: '1',
      title: '幸运抽奖'
    },
    component: () => import('../views/luckDraw.vue'),
  },
  {
    path: '/luckDraw2',
    meta: {
      index: '2',
      title: '幸运抽奖2'
    },
    component: () => import('../views/luckDraw2.vue'),
  }, {
    path: '/luckDraw3',
    meta: {
      index: '3',
      title: '幸运抽奖3'
    },
    component: () => import('../views/luckDraw3.vue'),
  }, {
    path: '/luckDraw4',
    meta: {
      index: '4',
      title: '幸运抽奖4'
    },
    component: () => import('../views/luckDraw4.vue'),
  }, {
    path: '/luckyTurntable',
    meta: {
      index: '5',
      title: '幸运大转盘'
    },
    component: () => import('../views/luckyTurntable.vue'),
  }, {
    path: '/rankingList',
    meta: {
      index: '6',
      title: '排行榜'
    },
    component: () => import('../views/rankingList.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router