import Vue from 'vue'

export default {
    namespaced: true,
    state: { 
        items: []
    },
    getters: {
        items(state) {
            return state.items
        },
        itemMap(state) {
            let itemMap = {}
            for(let i = 0; i < state.items.length; i++) {
                let product = state.items[i]
                itemMap[product.id_product] = product
            }
            return itemMap
        },
        item: (state, gatters) => (id) => {
            return gatters.itemMap[id]
        }
    },
    mutations: {
        loadItems(state, data) {
            state.items = data
        }
    },
    actions: {
        loadItems(store) {
            Vue.http.get('product.php')
                .then(response => response.json())
                .then(data => {
                    store.commit('loadItems', data)
                })
        }
    }
}

// function getProducts() {
//     return [
//         {
//             id_product: 1,
//             title: 'iPhone 5',
//             price: 10000, 
//         },
//         {
//             id_product: 2,
//             title: 'iPhone 6',
//             price: 20000, 
//         },
//         {
//             id_product: 3,
//             title: 'iPhone 7',
//             price: 35000, 
//         },
//     ]
// }