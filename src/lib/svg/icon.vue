<template>
    <svg :class="css" :viewBox="box" v-html="html"></svg>
</template>

<script>
import {conf} from 'lb/svg.config'
import vectors from './vectors'
import {isString} from 'js/typeCheck'
export default {
    props: {
        name: {}
    },

    data(){return{
        css: `${conf.cssClass} `,
        box: null,
        html: '',
    }},

    beforeMount()
    {
        if (isString(this.name))
        {
            const icon = vectors[this.name];
            this.css += icon.css;
            this.box = icon.box;
            this.html = icon.html;
        }
        else if (Array.isArray(this.name))
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
    },
}
</script>