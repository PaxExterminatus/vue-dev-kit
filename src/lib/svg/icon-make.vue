<template>
    <svg :class="[icon.css]" :viewBox="icon.box" v-html="icon.html"></svg>
</template>

<script>
import vectors from './vectors'
export default {
    props: {
        names: {type: Array},
    },

    data(){return{
       icon: this.names.map( name => {
           console.log(vectors[name]);
       }),
    }},
}
</script>