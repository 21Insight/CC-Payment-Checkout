import ProductDisplay from "./components/ProductDisplay.vue";
import SummaryPayment from "./components/SummaryPayment.vue";

const routes = [
  {
    path: "/",
    name: "productDisplay",
    component: ProductDisplay,
  },
  {
    path: "/summary-payment",
    name: "summaryPayment",
    component: SummaryPayment,
  },
];
export default routes;
