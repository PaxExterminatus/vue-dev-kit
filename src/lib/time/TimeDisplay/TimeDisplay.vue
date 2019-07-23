<template>
    <time :datetime="viewDatetime" :title="viewTitle">{{display}}</time>
</template>

<script>
import {timeDisplayOptions as opt} from 'lb/time.config'
export default {
    props: {
        display: {},
    },

    computed:{
        viewTitle(){
            return `${this.display.moment.format(opt.titleFormat)}`;
        },
        viewDatetime(){
            return this.display.moment.format(opt.datetimeFormat);
        }
    },
}
</script>