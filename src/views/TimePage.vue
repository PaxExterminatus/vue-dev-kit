<template>
    <div class="home">
        <h1>Time and Date</h1>
        <time-ago :dt="'2018-11-23 14:55:33'"></time-ago>
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
