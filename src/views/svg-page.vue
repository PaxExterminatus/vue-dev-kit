<template>
  <div class="page svg">
    <h1>Svg support</h1>

    <section>
      <h2>Single svg icon</h2>
      <div class="rw">
        <ico name="twitter"/>
        <ico name="plus"/>
      </div>
    </section>

    <section>
      <h2>Complex svg icon</h2>
      <div class="rw">
        <ico class="twitter-plus" :name="['twitter','plus']"/>
      </div>
    </section>

  </div>
</template>

<script>
import ico from 'svg/ico'
export default {
  components: {ico}
}
</script>