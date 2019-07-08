<template>
    <svg :class="[conf.cssClass]" :viewBox="icon.box" v-html="icon.html"
    ></svg>
</template>

<script>
import {isString} from 'js/typeCheck'
import {conf, vectors} from '../svg.config'
import {Svg, Path} from './svg-kit'
export default {
    props: {
        svg: {},
    },

    data(){return{
        conf,
        paths: isString(this.svg) ? [this.svg] : this.svg,
        icon: null,
    }},

    beforeMount() {
        this.icon = vectors[this.paths[0]];
    }
}
</script>