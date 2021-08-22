<template>
  <div class="product-single__container">
    <div class="product-single__column">
      <img
        :src="product.image"
        :alt="product.title"
        class="product-single__img"
      />
      <div class="product-single__title">{{ product.title }}</div>
      <div class="product-single__price-box">
        <div class="product-single__price">
          {{ product.amount }}
          <span>تومان</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: ["product"],
};
</script>
<style scoped lang="scss">
.product-single__container {
  text-align: center;
  padding: 10px;
  height: 100%;
  background-color: white;
  border-radius: 8px;
  flex: 0 0 33.33%;
  border-radius: 8px;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
    transform 0.2s cubic-bezier(0.4, 0, 1, 1);
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
}
.product-single__column {
  flex-direction: column;
  padding: 10px 15px 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-single__img {
  width: 180px;
  height: 180px;
  text-align: center;
  display: flex;
  align-items: center;
}
.product-single__title {
  text-align: right;
  margin-top: 14px;
  overflow: hidden;
  max-width: 90%;
  min-height: 50px;
  display: block;
  font-size: 0.857rem;
  line-height: 25px;
  color: #535353;
}
.product-single__price-box {
  margin-top: 1rem;
  display: inline-flex;
  min-height: 2rem;
  width: 100%;
  justify-content: flex-end;
}
.product-single__price {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.32rem;
  span {
    font-weight: 700;
    font-size: 1.32rem;
    line-height: 2.2;
    margin-right: 6px;
  }
}
</style>
