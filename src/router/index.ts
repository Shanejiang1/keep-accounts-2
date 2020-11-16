import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import Category from '@/views/Category.vue';
import EditCategory from '@/views/EditCategory.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path:'/category',
    component: Category
  },
  {
    path:'/category/edit/:id',
    component:EditCategory
  },
  {
    path: '*',
    component: NotFound
  },
];

const router = new VueRouter({
  routes
});

export default router;
