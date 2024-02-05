<template>
  <b-modal
    id="creditCardModal"
    title="Ingrese la Información de la Tarjeta de Crédito"
    @ok="handleOk"
    ok-title="Confirmar"
    ok-variant="success"
    cancel-title="Cancelar"
    cancel-variant="danger"
  >
    <b-form @submit.prevent="validateCreditCard">
      <b-row>
        <b-col cols="11">
          <b-form-group label="Número de Tarjeta" label-for="cardNumber">
            <the-mask
              v-model="creditCard.number"
              id="cardNumber"
              mask="################"
              placeholder="#### #### #### ####"
              :show="false"
              class="form-control"
              type="tel"
              pattern="\d*"
            ></the-mask>
          </b-form-group>
        </b-col>
        <b-col cols="1" class="logo-col">
          <font-awesome-icon
            :icon="getCardIcon(creditCard.number.substring(0, 6))"
            size="xl"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <b-form-group label="Fecha de Vencimiento" label-for="expirationDate">
            <the-mask
              v-model="creditCard.expirationDate"
              id="expirationDate"
              mask="##/##"
              placeholder="MM/YY"
              :show="false"
              class="form-control"
              type="tel"
              pattern="\d*"
            ></the-mask>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group label="CVV" label-for="cvv">
            <the-mask
              v-model="creditCard.cvv"
              id="cvv"
              mask="####"
              placeholder="###"
              :show="false"
              class="form-control"
              type="tel"
              pattern="\d*"
            ></the-mask>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      creditCard: {
        number: "",
        expirationDate: "",
        cvv: "",
      },
    };
  },
  methods: {
    openModal() {
      this.$bvModal.show("creditCardModal");
    },
    closeModal() {
      this.$bvModal.hide("creditCardModal");
    },
    validateCreditCard() {
      if (this.isValidCreditCard(this.creditCard)) {
        this.$router.push({ name: "summaryPayment" });
        this.closeModal();
      } else {
        this.$bvToast.toast("Error: Tarjeta de crédito no válida", {
          title: "Error",
          variant: "danger",
        });
      }
    },
    isValidCreditCard(creditCard) {
      return (
        this.isValidCardNumber(creditCard.number) &&
        this.isValidExpirationDate(creditCard.expirationDate) &&
        this.isValidCVV(creditCard.cvv)
      );
    },
    isValidCardNumber(cardNumber) {
      if (cardNumber.startsWith("3")) {
        return cardNumber.length === 15;
      } else {
        return cardNumber.length === 16;
      }
    },
    isValidExpirationDate(expirationDate) {
      const month = parseInt(expirationDate.substring(0, 2), 10);
      const year = parseInt(expirationDate.substring(2), 10);
      if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
        return false;
      }
      const currentDate = new Date();
      const expiration = new Date(2000 + year, month, 1);
      return expiration > currentDate;
    },
    isValidCVV(cvv, cardNumber) {
      if (cardNumber && cardNumber.startsWith("3")) {
        return cvv.length === 4;
      } else {
        return cvv.length === 3;
      }
    },
    getCardIcon(cardNumberPrefix) {
      if (cardNumberPrefix.startsWith("4")) {
        return ["fab", "cc-visa"];
      } else if (cardNumberPrefix.startsWith("5")) {
        return ["fab", "cc-mastercard"];
      } else if (
        cardNumberPrefix.startsWith("34") ||
        cardNumberPrefix.startsWith("37")
      ) {
        return ["fab", "cc-amex"];
      } else {
        return ["fas", "credit-card"];
      }
    },
    handleOk() {
      this.$router.push({ name: "summaryPayment" });
      this.$bvModal.hide("creditCardModal");
    },
  },
};
</script>

<style scoped>
.logo-col {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 1.25rem;
}
</style>
