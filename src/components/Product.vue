<template>
    <div>
        <h1>{{ thisProduct.title }}</h1>
        <hr>
        <p>Price: {{ thisProduct.price }}</p>
        <div class="alert alert-success">
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        thisId() {
            return this.$route.params.id
        },
        thisProduct() {
            return this.$store.getters['products/item'](this.thisId)
        }
    }
}
</script>