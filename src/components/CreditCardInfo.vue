<template>
    <div>
      <h2>Ingrese la Información de la Tarjeta de Crédito</h2>
      <b-form @submit.prevent="validateCreditCard">
        <b-form-group label="Número de Tarjeta" label-for="cardNumber">
          <b-input v-model="creditCard.number" id="cardNumber" required></b-input>
        </b-form-group>
        <!-- Otros campos como fecha de vencimiento, CVV, etc. -->
        <b-button type="submit">Continuar</b-button>
      </b-form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        creditCard: {
          number: ""
          // Otros campos de la tarjeta
        }
      };
    },
    methods: {
      validateCreditCard() {
        // Lógica para validar la información de la tarjeta de crédito
        if (this.isValidCreditCard(this.creditCard)) {
          this.$router.push({ name: "summaryPayment" });
        } else {
          this.$bvToast.toast("Error: Tarjeta de crédito no válida", {
            title: "Error",
            variant: "danger"
          });
        }
      },
      isValidCreditCard(creditCard) {
        // Lógica de validación de la tarjeta de crédito (puede ser más compleja)
        return creditCard.number.length === 16; // Ejemplo simple de validación
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  </style>
  