<template>
    <time class="time-ago" :datetime="dt">{{view}}</time>
</template>

<script>
import {timeConfig} from 'lb/time.config'
export default {
    props: {
        datetime: {}
    },

    computed: {
        dt()
        {
          return !!timeConfig.convert.input ? timeConfig.convert.input(this.datetime) : this.datetime;
        },

        view()
        {
            return this.dt;
        },
    },
}
</script>