import { createRouter, createWebHistory } from 'vue-router'



const Cart = () => import('@/pages/Cart.vue')
const Home = () => import('@/pages/Home.vue')


const routes = [
    { 
        path: '/', 
        name: 'Home',
        meta: {
            title: 'Главная'
        },
        component: Home, 
    },
    { 
        path: '/cart', 
        name: 'Cart',
        meta: {
            title: 'Корзина'
        },
        component: Cart, 
    }, 
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta?.title) {
        document.title = `${to.meta.title} | QPICK`
    } else {
        document.title = 'QPICK'
    }
    
    next()
})
export default router