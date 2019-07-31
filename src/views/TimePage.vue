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

                <table>
                    <caption>Day Expressions</caption>
                    <tr v-for="dt of difference">
                        <td>{{dt.format('YYYY.MM.DD HH:mm:ss')}}</td>
                        <td><time-expression :date="dt" :expressions="expressionsDay"/></td>
                    </tr>
                </table>

                <table>
                    <caption>Week Expressions</caption>
                    <tr v-for="dt of difference">
                        <td>{{dt.format('YYYY.MM.DD HH:mm:ss')}}</td>
                        <td><time-expression :date="dt" :expressions="expressionsWeek"/></td>
                    </tr>
                </table>

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
import {ExpressionPastDiff,ExpressionFutureDiff,ExpressionDay,ExpressionWeek,ExpressionMonth} from 'time/TimeExpression/TimeExpression'
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
        expressionsDay: [ExpressionDay,ExpressionFutureDiff,ExpressionPastDiff],
        expressionsWeek: [ExpressionWeek,ExpressionFutureDiff, ExpressionPastDiff],
        expressionsWeekAndDay: [ExpressionDay,ExpressionWeek,ExpressionMonth,ExpressionFutureDiff,ExpressionPastDiff],
    }},
}
</script>
