<template>
  <b-container>
    <div class="row justify-content-center align-items-center use-all-space">
      <b-row>
        <b-col md="6">
          <img
            class="img-fluid"
            src="https://via.placeholder.com/400"
            alt="Producto"
          />
        </b-col>
        <b-col md="6">
          <h2>{{ product.name }}</h2>
          <p class="text-muted">Categoría del Producto</p>
          <p>{{ product.description }}</p>
          <p class="font-weight-bold">Precio: ${{ product.price }}</p>
          <!-- Botón de Compra -->
          <b-button @click="openCreditCardModal"
            >Pagar con Tarjeta de Crédito</b-button
          >
          <CreditCardInfo ref="creditCardModal"></CreditCardInfo>
        </b-col>
      </b-row>
    </div>
  </b-container>
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
.use-all-space {
  height: 100vh;
}
</style>
