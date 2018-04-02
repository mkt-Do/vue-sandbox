<template>
  <h1>Hello, {{ name }}</h1>
</template>

<style scoped>
h1 {
  color: red;
}
</style>

<script>
export default {
  data () {
    return {
      name: 'World',
    };
  }
}
</script>

