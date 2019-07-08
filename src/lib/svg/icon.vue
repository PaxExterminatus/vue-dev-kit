<template>
    <svg :class="[icon.css]" :viewBox="icon.box" v-html="icon.html"></svg>
</template>

<script>
import {isString} from 'js/typeCheck'
import {vectors} from './svg.config'
export default {
    props: {
        name: {type: String},
    },

    data(){return{
        path: isString(this.name) ? this.name : null,
        paths: Array.isArray(this.name) ? this.name : null,
        icon: null,
    }},

    beforeMount() {
        this.icon = vectors[this.path];
    }
}
</script>