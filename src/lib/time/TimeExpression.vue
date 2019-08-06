<template>
    <time class="time-expression">{{display}}</time>
</template>

<script>
import {TimeDisplay} from 'time/TimeDisplay/TimeDisplay'
import {DifferencePast} from 'time/TimeExpression/DifferencePast'
import {DifferenceFuture} from 'time/TimeExpression/DifferenceFuture'
export default
{
    props: {
        date : {},
        expressions : {default: () => [DifferenceFuture,DifferencePast]},
    },

    data(){return{
        display: new TimeDisplay({
            inp: this.date,
            expressions: this.expressions
        }),
    }}
}
</script>