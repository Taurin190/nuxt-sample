<template>
  <v-row :align="align">
    <v-col v-for="tab in tabs" :key="tab.index" class="px-1 tab">
      <nuxt-link :to="tab.to" class="center block">
        <v-card tile class="text-center block py-5">
          <v-icon size=50>{{ tab.icon }}</v-icon>
          <span class="tab-title">{{ tab.title }}</span>
          <span class="e-title">{{ tab.etitle }}</span>
        </v-card>
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<style>
div.tab > a {
  text-decoration: none;
}
span.tab-title {
  display: block;
  font-size: 14px;
  color: lightgray;
}
span.e-title {
  display: block;
  font-size: 12px;
  color: darkgray;
}

</style>

<script>
export default {
  name: "TabMemu",
  data() {
    return {
      tabs: [
        {
          index: 1,
          icon: "mdi-home",
          title: "Sampleシネマズ",
          etitle: "HOME",
          to: "/",
        },
        {
          index: 2,
          icon: "mdi-movie-open",
          title: "上映中の作品",
          etitle: "NOW SHOWING",
          to: "/nowshowing",
        },
        {
          index: 3,
          icon: "mdi-video-vintage",
          title: "公開予定作品",
          etitle: "COMING SOON",
          to: "/comingsoon",
        },
        {
          index: 4,
          icon: "mdi-calendar-check",
          title: "イベント/キャンペーン",
          etitle: "EVENTS / CAMPAIGNS",
          to: "/events",
        },
        {
          index: 5,
          icon: "mdi-information",
          title: "サービス案内",
          etitle: "SERVICE INFO",
          to: "/service",
        },
        {
          index: 6,
          icon: "mdi-ticket-confirmation",
          title: "チケット購入・照会",
          etitle: "ONLINE TICKETS",
          to: "/tickets",
        },
      ],
    };
  },
};
</script>