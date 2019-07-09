<template>
    <svg :class="[icon.css]" :viewBox="icon.box" v-html="icon.html"></svg>
</template>

<script>
import vectors from '../vectors'
export default {
    props: {
        name: {type: String},
    },

    data(){return{
        icon: vectors[this.name],
    }},
}
</script>