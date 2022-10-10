<template>
  <v-btn
    class="cinema-link text-decoration-none px-5 py-5"
    color="blue-grey"
    :to="to"
    nuxt
    block
  >
    <slot></slot>
  </v-btn>
</template>
<style scoped>
a.cinema-link {
  color: white;
}
</style>
<script>
export default {
  name: "CinemaLinkButton",
  props: {
    to: {
      type: String,
      default: "/",
    },
  },
};
</script>
