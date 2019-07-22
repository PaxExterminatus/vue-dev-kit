<template>
    <time class="time-ago" :datetime="dt">{{relative}}</time>
</template>

<script>
import moment from 'moment';
import conf from 'lb/time.config'
import {TimeDifference, diff} from 'time/Time';
import {RelativeTimeDisplayOpt} from './RelativeTimeDisplayOpt';
export default {
    props: {
        dt: {},
        opt: {type: RelativeTimeDisplayOpt, default: () => conf.relativeTimeDisplayOpt},
    },

    data(){return{
        time: moment,
        relative: diff({
            withDt: this.dt,
        })
    }},
}
</script>