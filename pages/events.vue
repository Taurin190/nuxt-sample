<template>
  <div>
    <tab-menu :active="4" />
    <cinema-page-title
      title="イベント/キャンペーン一覧"
      sub_title="EVENTS/CAMPAIGNS"
    />
    <v-row>
      <v-col cols="8">
        <event-list-panel />
      </v-col>
      <v-col cols="4">
        <theater-panel />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <campaign-list-panel />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TabMenu from "~/components/organisms/TabMenu.vue";
import CinemaPageTitle from "~/components/atoms/CinemaPageTitle.vue";
import CampaignListPanel from "~/components/organisms/CampaignListPanel.vue";
import EventListPanel from "~/components/organisms/EventListPanel.vue";
import TheaterPanel from "~/components/organisms/TheaterPanel.vue";
export default {
  components: {
    TabMenu,
    CinemaPageTitle,
    CampaignListPanel,
    EventListPanel,
    TheaterPanel,
  },
  name: "EventsPage",
};
</script>
