<template>
    <div>
        <h1>Cart</h1>
        <hr>
        <div v-if="empty"
             class="alert alert-warning">
            Your cart is empty
        </div>
        <template v-else>
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products"
                        :key="product.id_product">
                        <td>{{ product.title }}</td>
                        <td>{{ product.price }}</td>
                    </tr>
                </tbody>
            </table>
            <button @click="onOrder()"
                    class="btn btn-success">
                Order now
            </button>
        </template>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('products', {
            productsAll: 'items'
        }),
        ...mapGetters('cart', {
            productInCart: 'products'
        }),
        products() {
            return this.productsAll.filter(elem => {
                return this.productInCart.indexOf(elem.id_product) !== -1
            })
        },
        empty() {
            return this.products.length === 0
        }
    },
    methods: {
        onOrder() {
            this.$router.push('/checkout')
        }
    }
}
</script>
