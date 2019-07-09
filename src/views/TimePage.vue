<template>
    <div class="home">
        <h1>Time and Date</h1>
        <time-ago></time-ago>
    </div>
</template>

<script>
import timeAgo from 'lb/time/time-ago';
export default {
    components: {
        timeAgo,
    }
}
</script>
