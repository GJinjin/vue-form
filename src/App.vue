<template>
  <div id="app">
    <!-- <Form /> -->
    <Tree />
  </div>
</template>

<script>
  // import Form from './components/form/';
  import Tree from './components/tree';

  export default {
    name: 'App',
    components: {
      // Form,
      Tree
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
