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
          <!-- Opciones del Producto (tallas, colores, etc.) -->
          <b-form-group label="Talla">
            <b-form-select v-model="selectedSize">
              <b-form-select-option value="small">Pequeña</b-form-select-option>
              <b-form-select-option value="medium"
                >Mediana</b-form-select-option
              >
              <b-form-select-option value="large">Grande</b-form-select-option>
            </b-form-select>
          </b-form-group>

          <b-form-group label="Color">
            <b-form-select v-model="selectedColor">
              <b-form-select-option value="red">Rojo</b-form-select-option>
              <b-form-select-option value="blue">Azul</b-form-select-option>
              <b-form-select-option value="green">Verde</b-form-select-option>
            </b-form-select>
          </b-form-group>
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
