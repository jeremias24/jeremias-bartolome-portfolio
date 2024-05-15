import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/portfolio/skills",
    meta: { middleware: "auth" },
  },
  {
    path: "/portfolio",
    redirect: "/portfolio/skills",
    component: () => import("@/components/DefaultLayout.vue"),
    children: [
      {
        path: "skills",
        name: "Skills",
        component: () => import("@/views/Skills.vue"),
      },
      {
        path: "projects",
        name: "Projects",
        component: () => import("@/views/Projects.vue"),
      },
      {
        path: "work-experiences",
        name: "WorkExperiences",
        component: () => import("@/views/WorkExperiences.vue"),
      },
      {
        path: "contact",
        name: "Contact",
        component: () => import("@/views/Contact.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/About.vue"),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
