<template>
    <div class="home">
        <h1>Time and date</h1>

        <section>
            <h2>Relative time display</h2>
            <div class="flex-row">

                <table>
                    <caption>Time Difference</caption>
                    <tr v-for="dt of difference">
                        <td>{{dt.format('YYYY.MM.DD HH:mm:ss')}}</td>
                        <td><time-diff :compare="moment()" :with="dt"/></td>
                    </tr>
                </table>

                <table>
                    <caption>Time Expression</caption>
                    <tr v-for="dt of expression">
                        <td>{{dt.format('YYYY.MM.DD')}}</td>
                        <td><time-expression :date="dt"/></td>
                    </tr>
                </table>
            </div>

        </section>

    </div>
</template>

<script>
import moment from 'moment'
import TimeDiff from 'time/TimeDisplay/component/TimeDiff'
import TimeExpression from 'time/TimeDisplay/component/TimeExpression'
export default {
    components: {TimeDiff,TimeExpression},
    data(){return{
       moment,

        difference: [
            moment().subtract(1,'d'),
            moment().subtract(2,'d'),
            moment().add(1,'d'),
            moment().add(2,'d'),
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

        expression: [
            moment().subtract(1,'d'),
            moment().subtract(2,'d'),
            moment().add(1,'d'),
            moment().add(2,'d'),
        ]
    }},
}
</script>
