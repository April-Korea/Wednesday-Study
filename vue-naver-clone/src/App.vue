<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* Reset */
body { margin: 0; padding: 0; }
#app {
  width: 100vw;
  height: 100vh;
}
</style>
