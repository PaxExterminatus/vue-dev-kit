<template>
    <div class="home">
        <h1>Time and date</h1>

        <section>
            <h2>Relative time display</h2>
            <table>
                <tr v-for="dt of dates">
                    <td>
                        {{dt.format('YYYY.MM.DD HH:mm:ss')}}
                    </td>
                    <td>
                        <relative-time-display :dt="dt"/>
                    </td>
                </tr>
            </table>
        </section>

    </div>
</template>

<script>
import moment from 'moment'
import RelativeTimeDisplay from 'time/RelativeTime/RelativeTimeDisplay'
export default {
    components: {RelativeTimeDisplay},

    data(){return{
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
    }},
}
</script>
