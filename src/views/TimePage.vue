<template>
    <div class="home">
        <h1>Time and date</h1>

        <section>
            <h2>Relative time display</h2>
            <div class="flex-row">

                <table><tr v-for="dt of dates">
                    <td>{{dt.format('YYYY.MM.DD HH:mm:ss')}}</td>
                    <td><time-diff :compare="moment()" :with="dt"/></td></tr>
                </table>

                <table>
                    <tr>
                        <td>{{expression.theDayBeforeYesterday.format('YYYY.MM.DD')}}</td>
                        <td><time-expression :date="expression.theDayBeforeYesterday"/></td>
                    </tr>
                    <tr>
                        <td>{{expression.yesterday.format('YYYY.MM.DD')}}</td>
                        <td><time-expression :date="expression.yesterday"/></td>
                    </tr>
                    <tr>
                        <td>{{expression.today.format('YYYY.MM.DD')}}</td>
                        <td><time-expression :date="expression.today"/></td>
                    </tr>
                    <tr>
                        <td>{{expression.tomorrow.format('YYYY.MM.DD')}}</td>
                        <td><time-expression :date="expression.tomorrow"/></td>
                    </tr>
                    <tr>
                        <td>{{expression.theDayAfterTomorrow.format('YYYY.MM.DD')}}</td>
                        <td><time-expression :date="expression.theDayAfterTomorrow"/></td>
                    </tr>
                </table>
            </div>

        </section>

    </div>
</template>

<script>
import moment from 'moment'
import TimeDiff from 'time/TimeDisplay/TimeDiff'
import TimeExpression from 'time/TimeDisplay/TimeExpression'
export default {
    components: {TimeDiff,TimeExpression},
    data(){return{
       moment,

        dates: [
            moment().subtract(1,'s'),
            moment().subtract(22,'s'),
            moment().subtract(1,'m'),
            moment().subtract(33,'m'),
            moment().subtract(1,'h'),
            moment().subtract(10,'h'),
            moment().subtract(1,'M'),
            moment().subtract(11,'M'),
            moment().subtract(1,'y'),
            moment().subtract(12,'y'),
        ],

        expression: {
            theDayBeforeYesterday: moment().subtract(2,'d'),
            yesterday: moment().subtract(1,'d'),
            today: moment(),
            tomorrow: moment().add(1,'d'),
            theDayAfterTomorrow: moment().add(2,'d'),
        }
    }},
}
</script>
