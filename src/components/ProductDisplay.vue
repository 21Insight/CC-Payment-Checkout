<template>
  <div>
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>Precio: ${{ product.price }}</p>
    <b-button @click="openCreditCardModal"
      >Pagar con Tarjeta de Crédito</b-button
    >
    <CreditCardInfo ref="creditCardModal"></CreditCardInfo>
  </div>
</template>

<script>
import CreditCardInfo from "@/components/CreditCardInfo.vue";
export default {
  data() {
    return {
      product: {
        name: "Producto Ejemplo",
        description: "Descripción del producto",
        price: 19.99,
      },
    };
  },
  methods: {
    openCreditCardModal() {
      this.$refs.creditCardModal.openModal();
    },
  },
  components: {
    CreditCardInfo,
  },
};
</script>

<style scoped>
/* Estilos específicos del componente */
</style>
