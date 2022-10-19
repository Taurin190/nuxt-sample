<template>
  <div>
    <tab-menu :active="3" />
    <movie-detail-panel :id="id" />
  </div>
</template>

<script>
import MovieDetailPanel from "~/components/organisms/MovieDetailPanel.vue";
import TabMenu from "~/components/organisms/TabMenu.vue";
import { defineComponent, useRoute } from "@nuxtjs/composition-api";
export default defineComponent({
  components: { TabMenu, MovieDetailPanel },
  name: "ComingSoonPage",
  setup() {
    const route = useRoute();
    const id = route.value.params.id;

    return {
      id,
    };
  },
});
</script>