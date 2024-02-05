import ProductDisplay from "./components/ProductDisplay.vue";
import SummaryPayment from "./components/SummaryPayment.vue";
import FinalStatus from "./components/FinalStatus.vue";

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
  {
    path: "/final-status",
    name: "finalStatus",
    component: FinalStatus,
  },
];
export default routes;
