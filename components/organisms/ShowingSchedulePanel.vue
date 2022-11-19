<template>
  <div class="point-card-panel py-5 mb-5 px-4 rounded">
    <v-row>
      <v-col cols="12">
        <panel-title
          :to="panel_title.to"
          :icon="panel_title.icon"
          :title="panel_title.title"
          :etitle="panel_title.etitle"
          :list_link="false"
        />
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
div.point-card-panel {
  background-color: white;
}
</style>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
import PanelTitle from "../molecules/PanelTitle.vue";

export default defineComponent({
  name: "ShowingSchedulePanel",
  components: { PanelTitle },
  props: {},
  setup() {
    const panel_title = {
      to: "/",
      icon: "mdi-calendar-month",
      title: "上映スケジュール",
      etitle: "SCHEDULE",
    };
    return { panel_title };
  },
});
</script>