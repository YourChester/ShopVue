<template>
    <div>
        <h1>Products</h1>
        <div class="row">
            <div class="col col-sm-4"
                v-for="item in productList"
                :key="item.id_product"
            >
                <router-link 
                    tag="h3"
                    :to="'/product/' + item.id_product"
                >
                    <a>{{ item.title }}</a>
                </router-link>
                <div>{{ item.price }}</div>
                <button v-if="cartList.indexOf(item.id_product) === -1"
                        @click="addToCart(item.id_product)"
                        class="btn btn-primary" 
                        >Add to cart</button>
                <button v-else
                        @click="removeToCart(item.id_product)"
                        class="btn btn-warning"
                        >Remove to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    created() {
        // this.$store.dispatch('products/loadItems')
    },
    computed: {
        ...mapGetters('products', {
            productList: 'items'
        }),
        ...mapGetters('cart', {
            cartList: 'products'
        })
    },
    methods: {
        ...mapActions('cart', {
            addToCart: 'add',
            removeToCart: 'remove'
        })
    }
}
</script>

<style scoped>
    .row {
        padding-left: 15px;
    }
</style>
