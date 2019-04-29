import Vue from 'vue'
import VueRouter from 'vue-router'

import { store } from '../store/'

Vue.use(VueRouter)

import E404 from '../components/E404.vue'
import ProductList from '../components/ProductList.vue'
import Product from '../components/Product.vue'
import Cart from '../components/Cart.vue'
import CheckOut from '../components/CheckOut.vue'

const routes = [
    {
        path: '*',
        component: E404
    },
    {
        path: '',
        redirect: {name: 'products'}
    },
    {
        name: 'products',
        path: '/products',
        component: ProductList,
        beforeEnter(from, to, next) {
            store.dispatch('products/loadItems')
            next()
        }

    },
    {
        path: '/product/:id',
        component: Product
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/checkout',
        component: CheckOut
    },
]

export const router = new VueRouter({
    routes,
    mode: 'history',
})