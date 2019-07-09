<template>
    <svg :class="conf.cssClass" :viewBox="box" v-html="html"></svg>
</template>

<script>
import vectors from './vectors'
import {conf} from './svg.config'
export default {
    props: {
        names: {type: Array},
    },

    data(){return{
        conf,
        box: '',
        html: '',
    }},

    beforeMount()
    {
        let maxsize = 0;
        this.names.map( name => {
            const vector = vectors[name];
            if (vector.size > maxsize)
            {
                maxsize = vector.size;
            }
            this.html += vector.html;
        });
        this.box = `0 0 ${maxsize} ${maxsize}`;
    }
}
</script>