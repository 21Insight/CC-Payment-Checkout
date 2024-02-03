<template>
    <div>
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>Precio: ${{ product.price }}</p>
      <b-button @click="goToCreditCardInfo">Pagar con Tarjeta de Crédito</b-button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          name: "Producto Ejemplo",
          description: "Descripción del producto",
          price: 19.99
        }
      };
    },
    methods: {
      goToCreditCardInfo() {
        // Lógica para navegar a la pantalla de información de la tarjeta de crédito
        this.$router.push({ name: "creditCardInfo" });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  </style>
  