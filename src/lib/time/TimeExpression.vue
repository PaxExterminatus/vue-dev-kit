<template>
    <time class="time-expression">
        {{display}}
    </time>
</template>

<script>
import {TimeDisplay} from 'time/TimeDisplay/TimeDisplay'
import {ExpressionPastDiff,ExpressionFutureDiff} from 'time/TimeDisplay/TimeExpression'
export default
{
    props: {
        date : {},
        expressions : {default: () => [ExpressionFutureDiff,ExpressionPastDiff]},
    },

    data(){return{
        display: new TimeDisplay({
            inp: this.date,
            expressions: this.expressions
        }).display,
    }}
}
</script>