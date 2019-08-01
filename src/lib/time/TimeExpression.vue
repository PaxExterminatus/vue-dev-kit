<template>
    <time class="time-expression">
        {{display}}
    </time>
</template>

<script>
import {TimeDisplay} from 'time/TimeDisplay/TimeDisplay'
import {ExpressionFutureDiff} from 'time/TimeDisplay/TimeExpression'
import {TimeDiffPast} from 'time/TimeDisplay/TimeDiffPast'
export default
{
    props: {
        date : {},
        expressions : {default: () => [ExpressionFutureDiff,TimeDiffPast]},
    },

    data(){return{
        display: new TimeDisplay({
            inp: this.date,
            expressions: this.expressions
        }).display,
    }}
}
</script>