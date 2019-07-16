<template>
    <time class="time-ago" :datetime="dt">{{view}}</time>
</template>

<script>
import {timeConfig} from 'lb/time.config'
import moment from 'moment'
export default {
    props: {
        datetime: {}
    },

    data(){return{
        start: moment.now(),
    }},

    computed: {
        dt() {
          return !!timeConfig.convert.input ? timeConfig.convert.input(this.datetime) : this.datetime;
        },

        view() {
            return !!timeConfig.timeAgo.view ? timeConfig.timeAgo.view(this.dt) : this.dt;
        },
    },
}
</script>