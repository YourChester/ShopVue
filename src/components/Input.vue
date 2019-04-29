<template>
    <input
        :type="nameLower"
        class="form-control"
        :class="isValid"
        :id="nameLower"
        @input="inputValue"
        @change="changeStore({id, value})">
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['name', 'pValue', 'id'],
    data() {
        return {
            value: '',
            change: false
        }
    },
    computed: {
        nameLower() {
            return this.name.toLowerCase()
        },
        isValid() {
            if(this.change)
                return (/\w/g).test(this.pValue) ? 'is-valid' : 'is-invalid'
            else
                return ''
        }
    },
    methods: {
        ...mapActions('checkout', {
            changeStore: 'changeItem'
        }),
        inputValue(e) {
            this.value = e.target.value
            this.change = true
        }
    }
}
</script>