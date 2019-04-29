export default {
    namespaced: true,
    state: { 
        items: [
            {
                name: 'Email',
                value: ''
            },
            {
                name: 'Name',
                value: ''
            },
            {
                name: 'Telefon',
                value: ''
            },
        ]
    },
    getters: {
        items(state) {
            return state.items
        }
    },
    mutations: {
        changeItem(state, data) {
            state.items[data.id].value = data.value
        },
    },
    actions: {
        changeItem(store, {id, value}) {
            store.commit('changeItem', {
                id, 
                value
            })
        }
    }
}