<template>
    <div>
      <h2>Estado Final del Pago</h2>
      <p>{{ paymentStatus }}</p>
      <!-- Otros detalles del estado final -->
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      paymentStatus() {
        // Recuperar el estado final del pago desde el store o local storage
        return "Éxito"; // O "Fracaso" según la respuesta de la API
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  </style>
  