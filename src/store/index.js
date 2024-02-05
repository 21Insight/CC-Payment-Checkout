import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentConfirmed: false,
  },
  mutations: {
    SET_PAYMENT_CONFIRMED(state, value) {
      state.paymentConfirmed = value;
    },
  },
  actions: {
    async confirmPayment({ commit }) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        commit("SET_PAYMENT_CONFIRMED", true);
        return "Pago confirmado con éxito";
      } catch (error) {
        console.error("Error al confirmar el pago:", error);
        throw error;
      }
    },
  },
});
