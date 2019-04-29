<template>
    <div>
        <h1>Order now</h1>
        <hr>
    <form>
        <div class="form-group" 
            v-for="(item, index) in formItems"
            :key="index"
        >
            <label :for="item.name.toLowerCase()">{{ item.name }}</label>
            <inputComponetn
                :name="item.name"
                :pValue="item.value"
                :id="index"
            >
            </inputComponetn>
        </div>
    </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import inputComponetn from './Input.vue'

export default {
    components: {
        inputComponetn
    },
    computed: {
        ...mapGetters('checkout', {
            formItems: 'items',
        })
    }
}
</script>