<template>
  <section>
    <Header />
    <div class="container panel-layout__top">
      <Sidebar />
      <div class="panel-layout__main">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
import Sidebar from "@/components/panel/sidebar";
import Header from "@/components/panel/header";

export default {
  components: { Sidebar, Header },
};
</script>

<style lang="scss" scoped>
.panel-layout {
  &__top {
    display: flex;
    @media screen and (min-width: 62em) {
      padding-top: 32px;
    }
  }
  &__main {
    flex: 1 1 auto;
    margin-right: 24px;
  }
}
</style>
