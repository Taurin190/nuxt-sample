<template>
  <v-col cols="12" class="white--text text-center">
    <cinema-link
      class="px-2"
      v-for="link in company_links"
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
import { defineComponent } from "@nuxtjs/composition-api";
import CinemaLink from "../atoms/CinemaLink.vue";
export default defineComponent({
  components: { CinemaLink },
  name: "CompanyLink",
  props: {
    links: {
      type: Array,
      default: () => [
        { text: "企業情報", to: "/", index: 1 },
        { text: "プライバシーポリシー", to: "/", index: 2 },
        { text: "特定商取引法表記", to: "/", index: 3 },
      ],
    },
  },
  setup(props) {
    const company_links = props["links"];

    return { company_links };
  },
});
</script>