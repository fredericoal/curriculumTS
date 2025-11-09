<script lang="ts">
export default {
  name: 'BadgeTag',
  props: {
    texto: { type: String, required: true },
    gold: Boolean
  }
}
</script>

<template>
  <span :class="['badge', {gold}]">
    {{ texto }}
    <!-- <span v-if="gold">GOLD</span> -->

  </span>
</template>

<style scoped>
.badge {
  /* width: 86px; */
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.3rem;
  text-align: center;
  transition: 0.2s;
  color: var(--cinza);
  background: var(--cinza-claro);
  font-weight: 500;
  font-size: 12px;
  color: var(--creme, #1f1f1d);
    color: var(--creme, #2f293f);
  background: linear-gradient(35deg, #ceadd1, #aeafd1);
}
/* #c7a727, #d0c084); #7f1090, #282bad);  #c2c2c2, #d8d8d8);*/
.badge.gold {
  color: var(--creme, #FFFAF3);
  background: linear-gradient(35deg, #9e5aab, #474baf);
}
</style>