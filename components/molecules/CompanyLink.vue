<template>
  <v-col cols="12" v-bind:class="style">
    <cinema-link
      class="px-2"
      v-for="link in links"
      :to="link.to"
      :key="link.text"
      v-bind:class="[link.index > 1 ? 'left-divider' : '']"
    >
      {{ link.text }}
    </cinema-link>
  </v-col>
</template>
<style scoped>
a.left-divider {
  border-left: 1px solid black;
}
</style>
<script>
import CinemaLink from "../atoms/CinemaLink.vue";
export default {
  components: { CinemaLink },
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