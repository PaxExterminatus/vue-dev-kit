<template>
    <div class="home">
        <h1>Time and date</h1>
        <section>
            <h2>Relative time display</h2>
            <div class="flex-row">
                <table>
                    <caption>Diff Expressions</caption>
                    <tr v-for="dt of difference">
                        <td>{{dt.format('YYYY.MM.DD HH:mm:ss')}}</td>
                        <td><time-expression :date="dt"/></td>
                    </tr>
                </table>

                <div>
                    <h4>Day expressions</h4>
                    <table>
                        <tr v-for="dt of days">
                            <td>{{dt.format('YYYY.MM.DD')}}</td>
                            <td><time-expression :date="dt" :expressions="expressionsDay"/></td>
                        </tr>
                    </table>

                    <h4>Week expressions</h4>
                    <table>
                        <tr v-for="dt of weeks">
                            <td>{{dt.format('YYYY.MM.DD')}}</td>
                            <td><time-expression :date="dt" :expressions="expressionsWeek"/></td>
                        </tr>
                    </table>

                    <h4>Month expressions</h4>
                    <table>
                        <tr v-for="dt of month">
                            <td>{{dt.format('YYYY.MM.DD')}}</td>
                            <td><time-expression :date="dt" :expressions="expressionsMonth"/></td>
                        </tr>
                    </table>
                </div>

                <table>
                    <caption>Day, Week, Month</caption>
                    <tr v-for="dt of difference">
                        <td>{{dt.format('YYYY.MM.DD HH:mm:ss')}}</td>
                        <td><time-expression :date="dt" :expressions="expressionsWeekAndDay"/></td>
                    </tr>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
import moment from 'moment'
import TimeExpression from 'time/TimeExpression'
import {ExpressionWithinDay,ExpressionWithinWeek,ExpressionWithinMonth} from 'time/TimeDisplay/TimeInterval'
import {TimeDiffPast} from 'time/TimeDisplay/TimeDiffPast'
import {TimeDiffFuture} from 'time/TimeDisplay/TimeDiffFuture'
export default {
    components: {TimeExpression},
    data(){return{
        moment,
        difference: [
            moment().subtract(1,'d'),
            moment().subtract(2,'d'),
            moment().subtract(7,'d'),
            moment().add(1,'d'),
            moment().add(2,'d'),
            moment().add(7,'d'),
            moment().subtract(1,'s'),
            moment().subtract(22,'s'),
            moment().subtract(1,'m'),
            moment().subtract(33,'m'),
            moment().subtract(1,'h'),
            moment().subtract(10,'h'),
            moment().subtract(1,'M'),
            moment().add(1,'M'),
            moment().subtract(11,'M'),
            moment().subtract(1,'y'),
            moment().subtract(12,'y'),
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
        expressionsDay: [ExpressionWithinDay],
        expressionsWeek: [ExpressionWithinWeek],
        expressionsMonth: [ExpressionWithinMonth],
        expressionsWeekAndDay: [ExpressionWithinDay,ExpressionWithinWeek,ExpressionWithinMonth,TimeDiffFuture,TimeDiffPast],
    }},
}
</script>
