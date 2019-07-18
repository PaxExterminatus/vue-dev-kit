<template>
    <div class="home">
        <h1>Time and Date</h1>
        <h2>UTC to Local (utcToLocal)</h2>
        <div>{{utcDt}}</div>
        <div>{{utcDt}}</div>

        <h2>Time Ago Function</h2>
        <div class="flex-table">
            <div>
                <h3>vMomentJs</h3>
                <table>
                    <th>add</th><th>result</th>
                    <tr v-for="add of timeAdd">
                        <td>{{add.size}}{{add.unit}}</td>
                        <td>{{vRelativeTime(add)}}</td>
                    </tr>
                </table>
            </div>
        </div>

        <h2>Time Ago Component</h2>
        <div>
            <relative-time-display :datetime="utcDt"/>
        </div>

    </div>
</template>

<script>
import moment from 'moment'
import {Time} from 'time/Time'
import {vMomentJs} from 'time/RelativeTime/RelativeTimeKit'
import RelativeTimeDisplay from 'time/RelativeTime/RelativeTimeDisplay'
export default {
    components: {RelativeTimeDisplay},

    data(){return{
        utcDt: moment.utc('2019-07-16 15:00:00'),

        timeAdd: [
            {size: 44, unit: 's'},
            {size: 45, unit: 's'},
            {size: 44, unit: 'm'},
            {size: 45, unit: 'm'},
            {size: 21, unit: 'h'},
            {size: 22, unit: 'h'},
            {size: 25, unit: 'd'},
            {size: 26, unit: 'd'},
            {size: 10, unit: 'M'},
            {size: 11, unit: 'M'},
            {size: 10, unit: 'y'},
        ],

        time: null,
    }},

    beforeMount()
    {
        const t1 = new Time({inp: '2019-07-16 15:00:00'});
        const t2 = new Time();

        console.log(t1.moment.utc().format());
        console.log(t2.moment.utc().format());
    },

    methods: {
        vRelativeTime(add) {
            return vMomentJs(moment().add(add.size, add.unit));
        }
    }
}
</script>
