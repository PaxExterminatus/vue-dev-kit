<template>
    <div class="home">
        <h1>Time and date</h1>

        <h2>Display Time and Timer</h2>
        <section class="flex-row">
            <table>
                <tr>
                    <td><time-display :date="timer" :expressions="timerExpressions"/></td>
                </tr>
                <tr><td><timer-display :date="timer" :expressions="timerExpressions"/></td></tr>
                <tr><td><timer-display :date="timer" :expressions="timerNowExpressions"/></td></tr>

            </table>
        </section>

        <section>
            <h2>Expression for time difference</h2>
            <div class="flex-row">
                <table>
                    <caption>Past Expressions</caption>
                    <tr v-for="dt of past">
                        <td>{{dt.format('YYYY.MM.DD HH:mm:ss')}}</td>
                        <td><time-display :date="dt" :expressions="expressionsPast"/></td>
                    </tr>
                </table>

                <table>
                    <caption>Future Expressions</caption>
                    <tr v-for="dt of future">
                        <td>{{dt.format('YYYY.MM.DD HH:mm:ss')}}</td>
                        <td><time-display :date="dt" :expressions="expressionsFuture"/></td>
                    </tr>
                </table>

                <div>
                    <h4>Day expressions</h4>
                    <table>
                        <tr v-for="dt of days">
                            <td>{{dt.format('YYYY.MM.DD')}}</td>
                            <td><time-display :date="dt" :expressions="expressionsDay"/></td>
                        </tr>
                    </table>

                    <h4>Week expressions</h4>
                    <table>
                        <tr v-for="dt of weeks">
                            <td>{{dt.format('YYYY.MM.DD')}}</td>
                            <td><time-display :date="dt" :expressions="expressionsWeek"/></td>
                        </tr>
                    </table>

                    <h4>Month expressions</h4>
                    <table>
                        <tr v-for="dt of month">
                            <td>{{dt.format('YYYY.MM.DD')}}</td>
                            <td><time-display :date="dt" :expressions="expressionsMonth"/></td>
                        </tr>
                    </table>

                    <h4>Year expressions</h4>
                    <table>
                        <tr v-for="dt of year">
                            <td>{{dt.format('YYYY.MM.DD')}}</td>
                            <td><time-display :date="dt" :expressions="expressionsYear"/></td>
                        </tr>
                    </table>
                </div>

                <div>
                    <h4>Time of day</h4>
                    <table>
                        <tr v-for="dt of timeOfDay">
                            <td>{{dt.format('HH:mm:ss')}}</td>
                            <td><time-display :date="dt" :expressions="expressionsTimeOfDay"/></td>
                        </tr>
                    </table>

                    <h4>Time of day and LTN</h4>
                    <table>
                        <tr v-for="dt of ltn">
                            <td>{{dt.format('YYYY.MM.DD HH:mm:ss')}}</td>
                            <td><time-display :date="dt" :expressions="expLtn"/></td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import moment from 'moment'
import {ExpressionWithinDay,ExpressionWithinWeek,ExpressionWithinMonth,ExpressionWithinYear} from 'time/TimeDisplay/Interval/Interval'

import {DifferencePast} from 'time/TimeDisplay/Difference/DifferencePast'
import {DifferenceFuture} from 'time/TimeDisplay/Difference/DifferenceFuture'
import {DifferenceNow} from 'time/TimeDisplay/Difference/DifferenceNow'

import {IntervalDay,IntervalDayLtn} from 'time/TimeDisplay/Day/DayExpression'

import TimeDisplay from 'time/TimeDisplay'
import TimerDisplay from 'time/TimerDisplay'
export default {
    components: {TimeDisplay,TimerDisplay},
    data(){return{
        moment,
        past: [
            moment().subtract(1,'s'),
            moment().subtract(22,'s'),
            moment().subtract(1,'d'),
            moment().subtract(2,'d'),
            moment().subtract(1,'m'),
            moment().subtract(33,'m'),
            moment().subtract(1,'h'),
            moment().subtract(10,'h'),
            moment().subtract(1,'M'),
            moment().subtract(11,'M'),
            moment().subtract(1,'y'),
            moment().subtract(12,'y'),
        ],
        future: [
            moment().add(1,'s'),
            moment().add(22,'s'),
            moment().add(1,'d'),
            moment().add(7,'d'),
            moment().add(1,'m'),
            moment().add(33,'m'),
            moment().add(1,'h'),
            moment().add(10,'h'),
            moment().add(1,'M'),
            moment().add(11,'M'),
            moment().add(1,'y'),
            moment().add(12,'y'),
        ],
        difference: [
            moment().add(1,'d'),
            moment().add(2,'d'),
            moment().add(7,'d'),
            moment().add(1,'M'),
        ],
        days: [
            moment().subtract(1,'d'),
            moment(),
            moment().add(1,'d'),
        ],
        weeks: [
            moment().subtract(7,'d'),
            moment(),
            moment().add(7,'d'),
        ],
        month: [
            moment().subtract(31,'d'),
            moment(),
            moment().add(31,'d'),
        ],
        year: [
            moment().subtract(1,'y'),
            moment(),
            moment().add(1,'y'),
        ],
        timeOfDay: [
            moment().set({hour:22, minute:0, second:0, millisecond:0}),
            moment().set({hour:0, minute:0, second:0, millisecond:0}),
            moment().set({hour:5, minute:0, second:0, millisecond:0}),
            moment().set({hour:6, minute:0, second:0, millisecond:0}),
            moment().set({hour:11, minute:0, second:0, millisecond:0}),
            moment().set({hour:12, minute:0, second:0, millisecond:0}),
            moment().set({hour:13, minute:0, second:0, millisecond:0}),
            moment().set({hour:17, minute:0, second:0, millisecond:0}),
            moment().set({hour:18, minute:0, second:0, millisecond:0}),
            moment().set({hour:21, minute:0, second:0, millisecond:0}),
        ],
        ltn: [
            moment().subtract(1,'d').set({hour:11, minute:0, second:0, millisecond:0}),
            moment().subtract(1,'d').set({hour:15, minute:0, second:0, millisecond:0}),
            moment().subtract(1,'d').set({hour:19, minute:0, second:0, millisecond:0}),

            moment().set({hour:11, minute:0, second:0, millisecond:0}),
            moment().set({hour:15, minute:0, second:0, millisecond:0}),
            moment().set({hour:19, minute:0, second:0, millisecond:0}),

            moment().add(1,'d').set({hour:11, minute:0, second:0, millisecond:0}),
            moment().add(1,'d').set({hour:15, minute:0, second:0, millisecond:0}),
            moment().add(1,'d').set({hour:19, minute:0, second:0, millisecond:0}),
        ],
        diff2: [
            moment().subtract(59,'s'),
            moment().add(30,'s')
        ],
        expressionsPast: [DifferencePast],
        expressionsFuture: [DifferenceFuture],
        expressionsDay: [ExpressionWithinDay],
        expressionsWeek: [ExpressionWithinWeek],
        expressionsMonth: [ExpressionWithinMonth],
        expressionsYear: [ExpressionWithinYear],
        expressionsTimeOfDay: [IntervalDay],
        expLtn: [IntervalDayLtn],

        timer: moment().add(8,'s'),
        timerExpressions:[DifferencePast,DifferenceFuture],
        timerNowExpressions:[DifferenceNow,DifferencePast,DifferenceFuture],
    }},
}
</script>
