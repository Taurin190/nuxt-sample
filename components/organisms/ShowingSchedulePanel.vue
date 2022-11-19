<template>
  <card-tile>
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
  </card-tile>
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
import CardTile from "../atoms/CardTile.vue";
import PanelTitle from "../molecules/PanelTitle.vue";

export default defineComponent({
  name: "ShowingSchedulePanel",
  components: { PanelTitle, CardTile },
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