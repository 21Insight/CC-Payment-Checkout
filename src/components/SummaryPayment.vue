<template>
    <div>
      <h2>Resumen del Pago</h2>
      <p>Producto: {{ product.name }}</p>
      <p>Precio: ${{ product.price }}</p>
      <!-- Otros detalles del resumen -->
      <b-button @click="confirmPayment">Confirmar Pago</b-button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      product() {
        // Recuperar información del producto desde el store o local storage
        return {
          name: "Producto Ejemplo",
          price: 19.99
        };
      }
    },
    methods: {
      confirmPayment() {
        // Lógica para confirmar el pago y realizar la llamada API
        this.$store.dispatch("confirmPayment", { /* datos del pago */ })
          .then(() => {
            this.$router.push({ name: "finalStatus" });
          })
          .catch(error => {
            this.$bvToast.toast(`Error: ${error.message}`, {
              title: "Error",
              variant: "danger"
            });
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  </style>
  