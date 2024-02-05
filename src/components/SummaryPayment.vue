<template>
  <b-container>
    <div class="row justify-content-center align-items-center use-all-space">
      <div class="card">
        <h2 class="mb-4">Resumen de Pago</h2>

        <b-row>
          <b-col>
            <b-card>
              <h4 class="mb-3">Detalles del Producto</h4>
              <p>{{ product.name }} - ${{ product.price }}</p>
            </b-card>
          </b-col>

          <b-col>
            <b-card>
              <h4 class="mb-3">Detalles de la Tarjeta</h4>
              <p>Número de Tarjeta: **** **** **** {{ cardInfo.cardNumber }}</p>
              <p>Fecha de Vencimiento: {{ cardInfo.expirationDate }}</p>
              <p>CVV: ***</p>
            </b-card>
          </b-col>
        </b-row>

        <b-button @click="confirmPayment" variant="success"
          >Confirmar Pago</b-button
        >
      </div>
    </div>
  </b-container>
</template>

<script>
import { EventBus } from "./../services/event-bus.js";
export default {
  data() {
    return {
      cardInfo: {
        cardNumber: "",
        cvv: "",
        expirationDate: "",
      },
    };
  },
  created() {
    EventBus.$on("card-info-submitted", this.handleCardInfoSubmitted);
  },
  computed: {
    product() {
      return {
        name: "Producto Ejemplo",
        price: 19.99,
      };
    },
  },
  methods: {
    confirmPayment() {
      this.$store
        .dispatch("confirmPayment", {})
        .then(() => {
          this.$router.push({ name: "finalStatus" });
        })
        .catch((error) => {
          this.$bvToast.toast(`Error: ${error.message}`, {
            title: "Error",
            variant: "danger",
          });
        });
    },
    handleCardInfoSubmitted(cardInfo) {
      console.log("Datos de la tarjeta recibidos en SummaryPayment:", cardInfo);
      this.cardInfo.cardNumber = cardInfo.cardNumber.slice(-4);
      this.cardInfo.cvv = cardInfo.cvv;
      this.cardInfo.expirationDate = cardInfo.expirationDate;
    },
  },
};
</script>

<style scoped>
.use-all-space {
  height: 100vh;
}
</style>
