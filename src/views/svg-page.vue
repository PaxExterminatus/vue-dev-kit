<template>
  <div class="page svg">
    <h1>SVG support</h1>

    <div class="rw">
      <icon name="twitter"/>
      <icon name="plus"/>
    </div>

    <div class="rw">
      <icon-make class="twitter-plus" :names="['twitter','plus']"/>
    </div>

  </div>
</template>

<script>
import icon from 'svg/icon'
import IconMake from "svg/icons";
export default {
  components: {IconMake, icon}
}
</script>