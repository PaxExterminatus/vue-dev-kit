<template>
  <div class="page svg">
    <h1>SVG support</h1>

    <div class="rw">
      <icon name="twitter"/>
      <icon name="plus"/>
    </div>

    <div class="rw">
      <icon class="twitter-plus" :name="['twitter','plus']"/>
    </div>

  </div>
</template>

<script>
import icon from 'svg/icon'
export default {
  components: {icon}
}
</script>