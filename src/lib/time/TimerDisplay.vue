<template>
    <time class="time-expression" :title="display.title" :datetime="display.datetime">{{display}}</time>
</template>

<script>
import {TimeDisplay} from 'time/TimeDisplay/TimeDisplay'
import {DifferencePast} from 'time/TimeExpressionDifference/DifferencePast'
import {DifferenceFuture} from 'time/TimeExpressionDifference/DifferenceFuture'
import {timeDisplay} from 'lib/time.config'
function makeDisplay(date,expressions,format) {
    return new TimeDisplay(date, expressions, format);
}
export default
{
    props:{
        date : {},
        expressions : {default: () => [DifferenceFuture,DifferencePast]},
    },

    data(){return{
        display: makeDisplay(this.date, this.expressions, timeDisplay.titleFormat),
    }},

    mounted()
    {
        this.updateDisplay()
    },

    methods: {
        updateDisplay(){
            this.display = makeDisplay(this.date, this.expressions, timeDisplay.titleFormat);
            setTimeout(this.updateDisplay,1000);
        }
    },

    watch:{
        date()
        {
            this.display = makeDisplay(this.date, this.expressions, timeDisplay.titleFormat);
        }
    }
}
</script>