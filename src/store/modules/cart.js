export default {
    namespaced: true,
    state: { 
        products: [],
        cnt: 0
    },
    getters: {
        products(state) {
            return state.products
        },
        cnt(state) {
            return state.cnt = state.products.length
        }
    },
    mutations: {
        add(state, id_product) {
            if(state.products.indexOf(id_product) === -1) {
                state.products.push(id_product)
            }
        },
        remove(state, id_product) {
            let pos = state.products.indexOf(id_product)
            if(pos !== -1) {
                state.products.splice(pos, 1)
            }
        }
    },
    actions: {
        add(store, id_product) {
            store.commit('add', id_product)
        },
        remove(store, id_product) {
            store.commit('remove', id_product)
        }
    }
}