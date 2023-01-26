import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/musics",
      name: "musics",
      component: () => import("../views/MusicsView.vue"),
    },
    {
      path: "/quotes",
      name: "quotes",
      component: () => import("../views/QuotesView.vue"),
    },
    {
      path: "/concerts",
      name: "concerts",
      component: () => import("../views/ConcertsView.vue"),
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("../views/GalleryView.vue"),
    },
    { 
      path: '/:catchAll(.*)', 
      name: 'NotFound',
      component: () => import("../views/PageNotFoundView.vue"),
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        top : 80,
        behavior: "smooth"
      };
    }
    return { x: 0, y: 0 };
  }
});
export default router;
