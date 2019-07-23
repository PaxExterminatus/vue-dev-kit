<template>
    <time-display :display="display"/>
</template>

<script>
import {exp} from 'time/Time';
import TimeDisplay from "time/TimeDisplay/TimeDisplay";
export default {
    components: {TimeDisplay},

    props: {
        date: {},
    },

    data(){return{
        display: exp({inp: this.date})
    }},
}
</script>