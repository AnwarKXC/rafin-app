import { createRouter, createWebHistory } from "vue-router"
import Home from '/src/views/Home.vue'
import Contact from '/src/views/Contact.vue'
import About from '/src/views/About.vue'
import Article from '/src/views/Article.vue'
import Blog from '/src/views/Blog.vue'
import PrivacyPolicy from '/src/views/PrivacyPolicy.vue'
import ReturnPolicy from '/src/views/ReturnPolicy.vue'
import TermsOfUse from '/src/views/TermsOfUse.vue'

const router = createRouter( {
  scrollBehavior ( to, from, savedPosition ) {
    if ( savedPosition ) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/contact-us",
      name: "contact",
      component: Contact,
      meta: {
        title: "Contact us",
      },
    },
    {
      path: "/about-us",
      name: "about",
      component: About,
      meta: {
        title: "About us",
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
      meta: {
        title: "Blog",
      },
    },
    {
      path: "/article/:id/:name",
      name: "article",
      component: Article,
      props:true,
      meta: {
        title: "Article",
      },
    },
    {
      path: "/terms",
      name: "terms",
      component: TermsOfUse,
      meta: {
        title: "Terms",
      },
    },
    {
      path: "/privacy",
      name: "privacy",
      component: PrivacyPolicy,
      meta: {
        title: "Privacy",
      },
    },
    {
      path: "/return",
      name: "return",
      component: ReturnPolicy,
      meta: {
        title: "Return",
      },
    },
  ],
} )

export default router
