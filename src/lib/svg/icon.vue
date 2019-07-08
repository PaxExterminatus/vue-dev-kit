<template>
    <svg :class="[conf.cssClass,vectorClass]"
         :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`"
         v-html="html"
    ></svg>
</template>

<script>
import {isString} from 'js/typeCheck'
import {conf, vectors} from '../svg.config'
export default {
    props: {
        svg: {},
        w: {},
        h: {},
    },

    data(){return{
        conf,
    }},

    computed: {
        useStr() {
            return isString(this.svg);
        },
        useArr() {
            return Array.isArray(this.svg);
        },

        html() {
            let html = '';
            if (this.useStr)
            {
                html += vectors[this.svg];
            }
            else if (this.useArr)
            {
                for (let name of this.svg)
                {
                    html += vectors[name];
                }
            } else {
                console.error(`svg property must be a String or Array, used ${typeof this.svg}`);
            }

            return html;
        },

        width() {
            return this.w || conf.width;
        },

        height() {
            return this.h || conf.height;
        },

        vectorClass() {
          return this.svg[0] || this.svg;
        },
    },
}
</script>