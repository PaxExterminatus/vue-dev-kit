<template>
    <time class="time-expression" :title="display.title" :datetime="display.datetime">{{display}}</time>
</template>

<script>
import {TimeDisplay} from 'time/time-display/TimeDisplayModel'
import {DifferencePast} from 'time/time-display/TimeExpression/Difference/DifferencePast'
import {DifferenceFuture} from 'time/time-display/TimeExpression/Difference/DifferenceFuture'
import {timeDisplay} from 'time/time.config'
function makeDisplay(cmp) {
    return new TimeDisplay(cmp.date, cmp.expressions, timeDisplay.titleFormat);
}
export default
{
    props:{
        date : {},
        expressions : {default: () => [DifferenceFuture,DifferencePast]},
    },

    data(){return{
        display: makeDisplay(this),
    }},

    mounted() {
        this.updateDisplay()
    },

    methods: {
        updateDisplay(){
            this.display = makeDisplay(this);
            setTimeout(this.updateDisplay,1000);
        }
    },

    watch: {
        date() {
            this.display = makeDisplay(this);
        }
    }
}
</script>