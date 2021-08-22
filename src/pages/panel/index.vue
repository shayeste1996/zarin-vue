<template>
  <section>
    <panel-layout>
      <router-view />
    </panel-layout>
  </section>
</template>

<script>
import PanelLayout from "@/components/layout/PanelLayout";
export default {
  components: { PanelLayout },
};
</script>

<style lang="scss" scoped></style>
