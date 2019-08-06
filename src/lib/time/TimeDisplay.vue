<template>
    <time class="time-expression">{{display}}</time>
</template>

<script>
import {TimeDisplay} from 'time/TimeDisplay/TimeDisplay'
import {DifferencePast} from 'time/TimeExpression/DifferencePast'
import {DifferenceFuture} from 'time/TimeExpression/DifferenceFuture'
export default
{
    props:{
        date : {},
        expressions : {default: () => [DifferenceFuture,DifferencePast]},
    },

    computed:{
        display()
        {
            return new TimeDisplay(this.date, this.expressions)
        }
    }
}
</script>