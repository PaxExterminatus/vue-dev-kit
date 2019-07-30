<template>
    <time>
        {{display}}
    </time>
</template>

<script>
import {TimeDisplay} from 'time/TimeExpression/TimeExpression'
export default
{
    props: {
        date : {},
    },

    data(){return{
        display: new TimeDisplay({inp: this.date}).display
    }}
}
</script>