<template>
    <time class="time-expression" :title="display.title" :datetime="display.datetime">{{display}}</time>
</template>

<script>
import {TimeDisplay} from 'time/TimeDisplay/TimeDisplay'
import {DifferencePast} from 'time/TimeExpressionDifference/DifferencePast'
import {DifferenceFuture} from 'time/TimeExpressionDifference/DifferenceFuture'
import {timeDisplay} from 'lib/time.config'
export default
{
    props:{
        date : {},
        expressions : {default: () => [DifferenceFuture,DifferencePast]},
    },

    computed:{
        display()
        {
            return new TimeDisplay(this.date, this.expressions, timeDisplay.titleFormat)
        }
    }
}
</script>