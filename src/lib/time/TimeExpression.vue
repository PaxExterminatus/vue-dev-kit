<template>
    <time class="time-expression">{{display}}</time>
</template>

<script>
import {TimeDisplay} from 'time/TimeDisplay/TimeDisplay'
import {TimeDiffPast} from 'time/TimeDisplay/TimeDiffPast'
import {TimeDiffFuture} from 'time/TimeDisplay/TimeDiffFuture'
export default
{
    props: {
        date : {},
        expressions : {default: () => [TimeDiffFuture,TimeDiffPast]},
    },

    data(){return{
        display: new TimeDisplay({
            inp: this.date,
            expressions: this.expressions
        }),
    }}
}
</script>