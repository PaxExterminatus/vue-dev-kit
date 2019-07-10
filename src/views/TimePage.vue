<template>
    <div class="home">
        <h1>Time and Date</h1>
        <time-ago :dt="'2018-01-01'"></time-ago>
    </div>
</template>

<script>
import timeAgo from 'lb/time/time-ago';
export default {
    components: {
        timeAgo,
    },
}
</script>
