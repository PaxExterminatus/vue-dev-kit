<template>
    <time class="time-ago" :datetime="dt">{{view}}</time>
</template>

<script>
import conf from 'lb/time.config'
import {RelativeTimeDisplayOpt} from './RelativeTimeDisplayOpt';
export default {
    props: {
        opt: {type: RelativeTimeDisplayOpt, default: () => conf.relativeTimeDisplayOpt},
        datetime: {},
    },

    data(){return{

    }},

    computed: {
        dt() {
          return !!conf.relativeTimeDisplayOpt.convert ? conf.relativeTimeDisplayOpt.convert(this.datetime) : this.datetime;
        },

        view() {
            return !!conf.relativeTimeDisplayOpt.display ? conf.relativeTimeDisplayOpt.display(this.dt) : this.dt;
        },
    },
}
</script>