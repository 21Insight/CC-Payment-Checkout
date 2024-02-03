<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ProductDisplay />
  </div>
</template>

<script>
import ProductDisplay from "./components/ProductDisplay.vue";

export default {
  name: "App",
  components: {
    ProductDisplay,
  },
};
</script>

<style></style>
