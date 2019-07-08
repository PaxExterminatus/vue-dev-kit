<template>
  <div class="page svg">
    <h1>SVG support</h1>

    <div class="rw">
      <icon svg="checkbox" class="brd-lap"/>
      <icon svg="checkbox" class="brd-rounded"/>
    </div>

    <div class="rw">
      <icon svg="arrow" class="brd-lap d180"/>
      <icon svg="arrow" class="brd-lap"/>

      <icon svg="arrow" class="brd-lap d90"/>
      <icon svg="arrow" class="brd-lap d90m"/>

      <icon svg="arrow" class="brd-lap d45"/>
      <icon svg="arrow" class="brd-lap d45m"/>

      <icon svg="arrow" class="brd-lap d135"/>
      <icon svg="arrow" class="brd-lap d135m"/>
    </div>

    <div class="rw">
      <icon svg="arrow" class="brd-rounded d180"/>
      <icon svg="arrow" class="brd-rounded"/>
    </div>

    <div class="rw">
      <icon svg="twitter" class="brd-lap"/>
    </div>

  </div>
</template>

<script>
import icon from 'svg/icon'
export default {
  components: {icon}
}
</script>