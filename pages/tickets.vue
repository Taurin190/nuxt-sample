<template>
  <div>
    <tab-menu :active="6" />
    <cinema-page-title title="チケット購入・照会" sub_title="ONLINE TICKETS" />
    <v-row>
      <v-col cols="4">
        <theater-panel theme_color_class="brown" />
      </v-col>
      <v-col cols="8">
        <ticket-system-panel />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TabMenu from "~/components/organisms/TabMenu.vue";
import CinemaPageTitle from "~/components/atoms/CinemaPageTitle.vue";
import TheaterPanel from '~/components/organisms/TheaterPanel.vue';
import TicketSystemPanel from '~/components/organisms/TicketSystemPanel.vue';
export default {
  components: { TabMenu, CinemaPageTitle, TheaterPanel, TicketSystemPanel },
  name: "TicketsPage",
};
</script>
