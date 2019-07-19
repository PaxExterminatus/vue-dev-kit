<template>
    <div class="home">
        <h1>Time and Date</h1>

        <section>
            <h2>Relative Time Display</h2>
            <relative-time-display :dt="'2018-07-19 15:00:00'"/>
        </section>

    </div>
</template>

<script>
import RelativeTimeDisplay from 'time/RelativeTime/RelativeTimeDisplay'
export default {
    components: {RelativeTimeDisplay},

    data(){return{

    }},

}
</script>
