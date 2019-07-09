<template>
    <svg :class="conf.cssClass" :viewBox="box" v-html="html"></svg>
</template>

<script>
import {conf} from '../config'
import vectors from '../vectors'
export default {
    props: {
        name: {type: Array},
    },

    data(){return{
        conf,
        box: '',
        html: '',
    }},

    beforeMount()
    {
        let maxsize = 0;
        this.name.map( name => {
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