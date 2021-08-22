<template>
  <section>
    <Header />
    <section class="container">
      <div class="product__container">
        <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </section>
</template>
<script>
import Header from "@/components/header";
import Product from "@/components/productsList";
import { zarinInstance } from "@/axiosInstance";
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProductsList() {
      zarinInstance
        .post("/site/index?username=beautyShop&page=1")
        .then((res) => {
          this.products = res.data.data;
        });
    },
  },
  created() {
    this.getProductsList();
  },
  components: {
    Header,
    Product,
  },
};
</script>
<style lang="scss" scoped>
.product__container {
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
  position: relative;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
  padding: 32px;
  border-radius: 32px;
  margin-top: 154px;
}
</style>
