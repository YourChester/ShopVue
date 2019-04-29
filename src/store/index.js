import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cart from './modules/cart'
import products from './modules/products'
import menu from './modules/menu'
import checkout from './modules/checkout'

export const store = new Vuex.Store({
    modules: {
        menu,
        products,
        cart,
        checkout
    }
})