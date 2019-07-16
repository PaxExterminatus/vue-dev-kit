<template>
    <div class="home">
        <h1>Time and Date</h1>
        <h2>UTC to Local</h2>
        <div>
            UTC: {{utcDt}} | Local: {{localDt}}
        </div>

        <h2>Time Ago</h2>
        <div>
            <time-ago :datetime="utcDt"></time-ago>
        </div>

    </div>
</template>

<script>
import timeAgo from 'lb/time/time-ago';
import {utcToLocal} from 'lb/time/time-kit'
export default {
    components: {timeAgo},

    data(){return{
        utcDt: '2019-07-16 16:00:00',
    }},

    computed: {
        localDt() {
            return utcToLocal(this.utcDt);
        }
    },
}
</script>
