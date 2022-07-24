<template>
  <v-col cols="12" v-bind:class="style">
    <nuxt-link
      class="black--text px-2 text-decoration-none"
      v-bind:class="[link.index > 1 ? 'left-divider' : '']"
      v-for="link in links"
      :key="link.text"
      :to="link.to"
    >
      {{ link.text }}
    </nuxt-link>
  </v-col>
</template>
<style scoped>
a.left-divider {
  border-left: 1px solid black;
}
</style>
<script>
export default {
  name: "CopyWrite",
  props: {
    links: {
      type: Array,
      default: [
        { text: "企業情報", to: "/", index: 1 },
        { text: "プライバシーポリシー", to: "/", index: 2 },
        { text: "特定商取引法表記", to: "/", index: 3 },
      ],
    },
    style: {
      type: String,
      default: "white--text text-center",
    },
  },
};
</script>