<template>
  <div class="about">
    <h1>User data input fields</h1>
    <section>
      <h2>Input multiline \n</h2>
      <input-multiline @input="searchInput"/>
      <div>
        {{searchArray}}
      </div>
    </section>
  </div>
</template>

<script>
import inputMultiline from 'in/input-multiline'
export default {
  components: {inputMultiline},
  data(){return{
    searchArray: '',
  }},

  methods:{
    searchInput(input) {
      this.searchArray = input;
    }
  }
}
</script>
