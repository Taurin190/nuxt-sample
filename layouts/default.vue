<template>
  <v-app light :style="{ background: $vuetify.theme.themes.light.background }">
    <v-app-bar :clipped-left="clipped" fixed app dark>
      <v-container>
        <address-bar-logo />
        <v-spacer />
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" xl="6" lg="10" class="mx-auto">
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <footer-panel />
  </v-app>
</template>

<script>
import AddressBarLogo from '~/components/molecules/AddressBarLogo.vue';
import FooterPanel from '~/components/organisms/FooterPanel.vue';
export default {
  components: { AddressBarLogo, FooterPanel },
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
