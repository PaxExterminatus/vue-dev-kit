<template>
    <time-display :display="display"/>
</template>

<script>
import {diff} from 'time/Time';
import TimeDisplay from "time/TimeDisplay/TimeDisplay";
export default {
    components: {TimeDisplay},

    props:{
        compare: {},
        with: {},
    },

    data(){return{
        display: diff({compareInp: this.compare, withInp: this.with})
    }},
}
</script>