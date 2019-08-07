<template>
  <div class="page svg">
    <h1>Svg support</h1>

    <h2>Single svg icon</h2>
    <div class="rw">
      <icon name="twitter"/>
      <icon name="plus"/>
    </div>

    <h2>Complex svg icon</h2>
    <div class="rw">
      <icon class="twitter-plus" :name="['twitter','plus']"/>
    </div>

  </div>
</template>

<script>
import icon from 'svg/svg-icon/components/icon'
export default {
  components: {icon}
}
</script>