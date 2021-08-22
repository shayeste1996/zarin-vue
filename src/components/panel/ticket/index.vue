<template>
  <div class="panel-ticket__cart">
    <h2 class="panel-ticket__title">تیکت‌ها</h2>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
import Logic from "./logic.js";
import "./style.scss";
export default Logic;
</script>
