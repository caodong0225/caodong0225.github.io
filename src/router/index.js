import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Details from '@/components/Details'
import Home from '@/components/Home'
import Archives from '@/components/Archives'
import Wuziqi from '@/components/Wuziqi'
import Jingziqi from '@/components/Jingziqi'
import Tanchishe from '@/components/Tanchishe'
import Newyork from '@/components/Newyork'
import Article1 from '@/components/Article1'
import Article2 from '@/components/Article2'
import Article3 from '@/components/Article3'
import Article4 from '@/components/Article4'
import Article5 from '@/components/Article5'
import Article6 from '@/components/Article6'
import Article7 from '@/components/Article7'
import Article8 from '@/components/Article8'
import Article9 from '@/components/Article9'
import Article10 from '@/components/Article10'
import Article11 from '@/components/Article11'
import Article12 from '@/components/Article12'
import Article13 from '@/components/Article13'
import Number_detect from '@/components/Number_detect'
import CV from '@/components/CV'
import CTF from '@/components/CTF'
import Crypto from '@/components/Crypto'
import NLP from '@/components/NLP'
import AI from '@/components/AI'
import Game from '@/components/Game'
import AIdemo from '@/components/AIdemo'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/blog'
    },
    {
      path: '/blog',
      name: 'Index',
      component: Index,
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
    },
    {
      path: '/blog/wuziqi',
      name: 'Wuziqi',
      component: Wuziqi,
    },
    {
      path: '/blog/jingziqi',
      name: 'Jingziqi',
      component: Jingziqi,
    },
    {
      path: '/blog/newyork',
      name: 'Newyork',
      component: Newyork,
    },
    {
      path: '/cv',
      name: 'CV',
      component: CV,
    },
    {
      path: '/game',
      name: 'Game',
      component: Game,
    },
    {
      path: '/nlp',
      name: 'NLP',
      component: NLP,
    },
    {
      path: '/crypto',
      name: 'Crypto',
      component: Crypto,
    },
    {
      path: '/ai',
      name: 'AI',
      component: AI,
    },
    {
      path: '/aidemo',
      name: 'AIdemo',
      component: AIdemo,
    },
    {
      path: '/blog/number_detect',
      name: 'Number_detect',
      component: Number_detect,
    },
    {
      path: '/ctf',
      name: 'CTF',
      component: CTF,
    },
    {
      path: '/archives/article1',
      name: 'Article1',
      component: Article1,
    },
    {
      path: '/archives/article2',
      name: 'Article2',
      component: Article2,
    },
    {
      path: '/archives/article3',
      name: 'Article3',
      component: Article3,
    },
    {
      path: '/archives/article4',
      name: 'Article4',
      component: Article4,
    },
    {
      path: '/archives/article5',
      name: 'Article5',
      component: Article5,
    },

        {
      path: '/archives/article6',
      name: 'Article6',
      component: Article6,
    },
    {
      path: '/archives/article7',
      name: 'Article7',
      component: Article7,
    },
    {
      path: '/archives/article8',
      name: 'Article8',
      component: Article8,
    },
    {
      path: '/archives/article9',
      name: 'Article9',
      component: Article9,
    },
    {
      path: '/archives/article10',
      name: 'Article10',
      component: Article10,
    },
    {
      path: '/archives/article11',
      name: 'Article11',
      component: Article11,
    },
    {
      path: '/archives/article12',
      name: 'Article12',
      component: Article12,
    },
    {
      path: '/archives/article13',
      name: 'Article13',
      component: Article13,
    },
    {
      path: '/blog/tanchishe',
      name: 'Tanchishe',
      component: Tanchishe,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/archives',
      name: 'archives',
      component: Archives,
    },
  ],
  mode: 'hash'

})
