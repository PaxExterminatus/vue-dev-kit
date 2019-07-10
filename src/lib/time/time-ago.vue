<template>
    <time class="time-ago" :datetime="dt">{{view}}</time>
</template>

<script>
import moment from 'moment'
export default {
    props: {
        dt: {}
    },

    computed: {
        view(){
            return this.dt;
        },
    },
}
</script>