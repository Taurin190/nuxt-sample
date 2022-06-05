<template>
  <v-card>
    <v-tabs centered icons-and-text>
      <!-- <v-tabs-slider></v-tabs-slider> -->
      <v-tab v-for="tab in tabs" :key="tab.index" :href="tab.to">
        {{ tab.title }}
        <v-icon>{{ tab.icon }}</v-icon>
      </v-tab>

      <!-- <v-tab href="#tab-2">
        Favorites
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Nearby
        <v-icon>mdi-account-box</v-icon>
      </v-tab> -->
      <v-tabs-items v-model="tabs">
        <v-card flat>
          <v-card-text>
            {{ title }}
          </v-card-text>
        </v-card>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<style>
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
          title: "HOME",
          to: "/",
        },
        {
          index: 2,
          icon: "mdi-movie-open",
          title: "NOW SHOWING",
          to: "/nowshowing",
        },
        {
          index: 3,
          icon: "mdi-video-vintage",
          title: "COMING SOON",
          to: "/comingsoon",
        },
        {
          index: 4,
          icon: "mdi-calendar-check",
          title: "EVENTS / CAMPAIGNS",
          to: "/events",
        },
        {
          index: 5,
          icon: "mdi-information",
          title: "SERVICE INFO",
          to: "/service",
        },
        {
          index: 6,
          icon: "mdi-ticket-confirmation",
          title: "ONLINE TICKETS",
          to: "/tickets",
        },
      ],
    };
  },
};
</script>