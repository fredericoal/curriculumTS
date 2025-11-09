<script lang="ts">

export default {
  name: 'LinkTag',
  props: {
    strText: { type: String, required: true },
    strLink: { type: String, required: true }
  }
}
</script>

<template>
  <li>{{ strText }} [<a :href="strLink">Link</a>]</li>
</template>

<style scoped></style>