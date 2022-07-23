<template>
  <v-col cols="5">
    <nuxt-link 
    v-for="link in links"
    :key="link.index"
    v-bind:class="[link.index > 1 ? 'left-divider': '']"
    class="black--text px-2 my-2 text-decoration-none" 
    :to="link.to"
      >{{ link.text }}</nuxt-link
    >
  </v-col>
</template>
<style scoped>
a.left-divider {
  border-left: 1px solid black;
}
</style>
<script>
export default {
  name: "IMaxLink",
  props: {
    links: {
      type: Array,
      default: [
        { text: "HOME", to: "/", index: 1 },
        { text: "IMAX", to: "/imax", index: 2 },
        { text: "4DX/ScreenX/4DX Screen", to: "/4dx", index: 3 },
      ],
    },
  },
};
</script>