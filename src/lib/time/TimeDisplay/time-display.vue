<template>
    <time class="time-expression" :title="display.title" :datetime="display.datetime">{{display}}</time>
</template>

<script>
import {TimeDisplay} from 'time/TimeDisplay/realisation/TimeDisplay'
import {DifferencePast} from 'time/TimeExpression/Difference/DifferencePast'
import {DifferenceFuture} from 'time/TimeExpression/Difference/DifferenceFuture'
import {timeDisplay} from 'lib/time.config'
export default
{
    props:{
        date:{},
        expressions : {default: () => [DifferenceFuture,DifferencePast]},
    },

    computed:{
        display()
        {
            return new TimeDisplay(this.date, this.expressions, timeDisplay.titleFormat);
        }
    }
}
</script>