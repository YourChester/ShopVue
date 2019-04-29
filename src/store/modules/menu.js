export default {
    namespaced: true,
    state: { 
        items: [
            {
                url: '/products',
                text: 'Product list'
            },
            {
                url: '/cart',
                text: 'Cart'
            },
            {
                url: '/checkout',
                text: 'Order Now'
            },
        ]
    },
    getters: {
        items(state) {
            return state.items
        }
    }
}