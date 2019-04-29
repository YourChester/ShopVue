<template>
    <div>
        <h1>{{ thisProduct.title }}</h1>
        <hr>
        <p>Price: {{ thisProduct.price }}</p>
        <button v-if="cartList.indexOf(thisProduct.id_product) === -1"
            @click="addToCart(thisProduct.id_product)"
            class="btn btn-primary">
            Add to cart</button>
        <button v-else
            @click="removeToCart(thisProduct.id_product)"
            class="btn btn-warning">
            Remove to cart</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    created() {
        this.$store.dispatch('products/loadItems')
    },
    computed: {
        ...mapGetters('cart', {
            cartList: 'products'
        }),
        thisId() {
            return this.$route.params.id
        },
        thisProduct() {
            return this.$store.getters['products/item'](this.thisId)
        }
    },
    methods: {
        ...mapActions('cart', {
            addToCart: 'add',
            removeToCart: 'remove'
        })
    }
}
</script>