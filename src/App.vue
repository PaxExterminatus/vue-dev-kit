<template>
  <div id="app">
    <div id="nav" class="margin-child-right">
      <router-link to="/">Home</router-link>
      <router-link to="/input">Input</router-link>
      <router-link to="/svg">Svg</router-link>
      <router-link to="/time">Time</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  table {
    border-collapse: collapse;
  }
  table, th, td {
    border: 1px solid #2c3e50;
    padding: 5px;
  }
</style>
