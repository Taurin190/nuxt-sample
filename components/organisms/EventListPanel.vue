<template>
  <card-tile>
    <v-row>
      <v-col cols="12">
        <panel-title
          :to="panel_title.to"
          :icon="panel_title.icon"
          :title="panel_title.title"
          :etitle="panel_title.etitle"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="event in events" :key="event.id" cols="12">
        <campaign-link
          :to="event.link"
          :description="event.description"
          :image_path="event.image_path"
        />
      </v-col>
    </v-row>
  </card-tile>
</template>
<script>
import { useContext, useAsync } from "@nuxtjs/composition-api";
import CampaignLink from "../molecules/CampaignLink.vue";
import PanelTitle from "../molecules/PanelTitle.vue";
import CardTile from "../atoms/CardTile.vue";
export default {
  components: { PanelTitle, CampaignLink, CardTile },
  name: "EventListPanel",
  data() {
    return {
      panel_title: {
        to: "/events",
        icon: "mdi-calendar-check",
        title: "イベント",
        etitle: "EVENTS",
      },
    };
  },
  setup() {
    const { app } = useContext();
    const events = useAsync(async () => {
      const response = await app.$repositories("event").get();
      console.log(response);
      return response.data;
    });

    return { events };
  },
};
</script>