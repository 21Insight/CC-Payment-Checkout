import { mount } from "@vue/test-utils";
import ProductDisplay from "./../../src/components/ProductDisplay.vue";

describe("ProductDisplay", () => {
  test("renders the component", () => {
    const wrapper = mount(ProductDisplay);
    // check that the wrapper contains the component
    expect(wrapper.html()).toMatchSnapshot();
  });
});
