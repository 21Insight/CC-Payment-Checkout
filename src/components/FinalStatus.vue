<template>
  <div>
    <h2>Estado Final del Pago</h2>
    <p>{{ paymentStatus }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    paymentStatus() {
      return "Éxito";
    },
  },
};
</script>

<style scoped></style>
